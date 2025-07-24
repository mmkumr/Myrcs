if {![info exists _GS_SCRIPT]} {
	set _GS_SCRIPT "/usr/bin/g.sh"
}

if {![info exists _GS_SHARE]} {
	set _GS_SHARE "/usr/share/g"
}

proc lshift ls {
	upvar 1 $ls l
	set r [lindex $l 0]
	set l [lreplace $l [set l 0] 0]
	return
}

proc _g_sh { args } {
	if { [llength $args] eq 0 } {
		return [exec $::_GS_SCRIPT -l]
	}

	while {[llength $args] > 0} {
		switch -regex -- [lindex $args 0] {
			-r|--register { set arg_mode "r" }
			-u|--unregister { set arg_mode "u" }
			-l|--list { set arg_mode "l" }
			-x|--expand { set arg_mode "x" }
			-c|--cleanup { set arg_mode "c" }
			-I|--fzf { set arg_mode "I" }
			-p|--push { set arg_pushd "p" }
			-h|--help { set arg_mode "h" }
			-V|--version { set arg_mode "V" }
			default { break }
		}
		lshift args
	}

	if {![info exists arg_mode]} {
		set arg_mode ""
	}

	switch -regex -- $arg_mode {

		h|V {
			return [exec $::_GS_SCRIPT "-$arg_mode"]
		}

		l {
			return [exec $::_GS_SCRIPT "-$arg_mode" {*}$args]
		}

		r|u|x|c {
			return [exec $::_GS_SCRIPT "-$arg_mode" {*}$args]
		}

		default {
			switch -- $arg_mode {
				I {
					set gdest [exec $::_GS_SCRIPT -I {*}$args <@ stdin 2>@ stderr]
				}
				default {
					set gdest [exec $::_GS_SCRIPT -x {*}$args]
				}
			}

			if {[info exists gdest]} {
				if {[file isdirectory $gdest]} {
					# Change directory
					if {[info exists arg_pushd]} {
						pushd $gdest >/dev/null
					} elseif {![info exists _GS_CD]} {
						cd $gdest
					} else {
						# Untested
						$::_GS_CD $gdest
					}

					global _GS_ECHO
					if {[info exists _GS_ECHO]} { pwd }

				} else {
					# Open file
					global _GS_OPENER
					global OPENER

					if {[info exists _GS_OPENER]} {
						return [exec $_GS_OPENER $gdest <@ stdin >@ stdout 2>@ stderr]
					} elseif {[info exists OPENER]} {
						return [exec $OPENER $gdest <@ stdin >@ stdout 2>@ stderr]
					} else {
						return [exec xdg-open $gdest <@ stdin >@ stdout 2>@ stderr]
					}
				}
			}

		}
	}
}

if {[info exists _GS_CMD]} {
	proc $_GS_CMD { args } { _g_sh {*}$args }
} else {
	proc g { args } { _g_sh {*}$args }
}
