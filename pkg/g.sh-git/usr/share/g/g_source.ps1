If (-not (Test-Path variable:script:_GS_SCRIPT)) {
	$script:_GS_SCRIPT = "/usr/bin/g.sh"
}

If (-not (Test-Path variable:script:_GS_SHARE)) {
	$script:_GS_SHARE = "/usr/share/g"
}

Function global:_g_sh {
	if ($args.count -eq 0) {
		& $script:_GS_SCRIPT -l
		return
	}

	$arg_mode = ""
	$arg_pushd = ""
	:loop While ($args) {
		Switch -Regex ($args[0]) {
		"-r|--register" { $arg_mode = "r"; Break }
		"-u|--unregister" { $arg_mode = "u"; Break }
		"-l|--list" { $arg_mode = "l"; Break }
		"-x|--expand" { $arg_mode = "x"; Break }
		"-c|--cleanup" { $arg_mode = "c"; Break }
		"-I|--fzf" { $arg_mode = "I"; Break }
		"-p|--push" { $arg_pushd = "p"; Break }
		"-h|--help|-\?" { $arg_mode = "h"; Break }
		"-V|--version" { $arg_mode = "V"; Break }
		Default { Break loop }
		}
		$_, $args = $args
		If (!$args) { Break loop }
	}

	$env:PWD = ([string] $PWD)

	Switch -Regex ($arg_mode) {
		"h|V" { & $script:_GS_SCRIPT "-$arg_mode" }
		"l" {
			If (Test-Path variable:script:_GS_GREP) {
				$env:_GS_GREP = $script:_GS_GREP
			}
			& $script:_GS_SCRIPT -l $args
		}
		"r|u|x|c" {
			& $script:_GS_SCRIPT "-$arg_mode" $args
		}
		Default {
			If ($arg_mode -eq "I") {
				$gdest = & $script:_GS_SCRIPT -I $args
			} Else {
				$gdest = & $script:_GS_SCRIPT -x $args
			}

			If ($gdest) {
				If (Test-Path -Path $gdest -PathType Container) {
					# Change directory
					If ($env:_GS_CD) { & $env:_GS_CD "$gdest" }
					Else { & Push-Location "$gdest" }
					If ($env:_GS_ECHO) { Write-Host $PWD }
				} Else {
					# Open file
					If ($env:_GS_OPENER) {
						& $env:_GS_OPENER "$gdest"
					} Elseif ($env:OPENER) {
						& $env:OPENER "$gdest"
					} Else {
						& xdg-open "$gdest"
					}
				}
			}

		}
	}
}

If ($env:_GS_CMD) {
	Set-Alias $env:_GS_CMD _g_sh -Scope Global
} Else {
	Set-Alias g _g_sh -Scope Global
}
