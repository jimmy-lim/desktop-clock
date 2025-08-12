# desktop-clock
Desktop clock written in JS (electron), rendering SVG clock face and clock hands.

TODO
- dockerize
- gradient/color change by time 
- production build/deploy

Why use the framework ? well, its just for practicing.

This is dead simpler:

''' alias clock='while true; do tput cup 0 0; date +%T | toilet -f bigmono12 | lolcat --seed=$(date +%s) --spread=10 --freq=0.2; sleep 1; done'; '''
