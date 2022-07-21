import os
from fontforge import *

font = open(os.sys.argv[1])
count = 0
for g in font:
        if count % 32 == 0: print()
        try:
                print(chr(font[g].unicode), end='')
        except:
                print(" ", end='')
        count += 1