import React from 'react';

interface SVGProps {
  size?: number;
  fill?: string;
  onClick?: () => void;
}

const LogoIcon: React.FC<SVGProps> = ({ size = 150, fill="#cf3d3e"}) => (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width={size}  height={size} viewBox="0 0 1024.000000 1024.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
fill={fill} stroke="none">
<path d="M1935 6109 c-44 -4 -210 -31 -370 -59 -574 -102 -620 -110 -634 -110
-11 0 -12 -13 -7 -62 9 -76 37 -261 76 -505 17 -100 30 -212 30 -250 0 -37 7
-109 15 -159 74 -456 400 -786 844 -854 108 -17 271 -8 376 20 105 28 249 98
305 148 l45 41 -31 31 -30 31 -55 -37 c-74 -50 -161 -89 -261 -116 -106 -29
-306 -31 -411 -5 -410 102 -687 458 -687 882 1 225 67 412 210 592 101 127
289 241 475 289 89 23 115 25 235 21 164 -4 259 -28 398 -98 52 -27 96 -49 97
-49 1 0 14 18 28 39 l26 39 -38 25 c-170 113 -414 169 -636 146z m-557 -249
c-120 -111 -199 -218 -260 -355 -23 -52 -27 -57 -32 -35 -9 38 -56 349 -56
369 0 15 31 23 198 53 108 19 203 36 211 37 8 0 -20 -31 -61 -69z"/>
<path d="M1875 5804 c-40 -7 -111 -34 -165 -60 -78 -39 -109 -61 -176 -129
-138 -139 -203 -301 -204 -506 -1 -420 328 -738 739 -717 194 10 390 110 477
244 18 27 18 27 -16 55 l-34 29 -54 -54 c-107 -111 -243 -168 -405 -169 -110
-2 -178 13 -273 59 -156 76 -278 231 -319 407 -19 81 -19 227 0 302 80 317
393 509 717 441 91 -20 210 -80 275 -140 l55 -50 19 25 c43 53 43 53 -21 113
-148 136 -388 195 -615 150z"/>
<path d="M4032 5088 l3 -703 88 -3 87 -3 -2 703 -3 703 -88 3 -87 3 2 -703z"/>
<path d="M5650 5509 l0 -280 -33 25 c-118 90 -369 94 -516 9 -98 -57 -172
-150 -212 -264 -30 -88 -31 -238 -1 -321 56 -155 179 -266 334 -303 146 -34
309 -2 407 80 l31 27 0 -51 0 -51 84 0 84 0 7 103 c3 56 4 305 1 552 -2 248
-5 519 -5 603 l-1 152 -90 0 -90 0 0 -281z m-143 -382 c64 -33 127 -104 149
-169 22 -68 15 -184 -15 -254 -28 -63 -90 -126 -156 -156 -70 -31 -191 -32
-257 -1 -111 51 -177 150 -186 278 -9 148 78 274 221 321 65 21 182 12 244
-19z"/>
<path d="M4491 5744 c-36 -30 -49 -81 -30 -125 14 -35 62 -69 97 -69 55 0 112
56 112 110 0 29 -26 76 -52 94 -35 25 -91 20 -127 -10z"/>
<path d="M6121 5756 c-69 -38 -67 -162 4 -194 79 -36 165 20 165 109 0 47 -56
99 -106 99 -22 -1 -50 -7 -63 -14z"/>
<path d="M3181 5319 c-172 -30 -332 -184 -371 -354 -28 -121 -5 -284 53 -377
34 -57 116 -137 172 -169 149 -85 379 -73 510 27 25 19 47 34 50 34 3 0 5 -23
5 -50 l0 -51 88 3 87 3 0 460 0 460 -92 3 -92 3 -3 -41 -3 -40 -39 26 c-85 58
-242 85 -365 63z m254 -191 c108 -56 168 -153 169 -273 0 -86 -14 -136 -56
-200 -78 -118 -255 -167 -391 -107 -64 28 -131 93 -158 155 -33 73 -33 200 -1
273 31 68 95 129 168 160 80 34 194 30 269 -8z"/>
<path d="M6890 5324 c-44 -9 -124 -36 -164 -56 -97 -49 -202 -184 -231 -296
-31 -118 -13 -278 42 -372 141 -241 463 -313 693 -154 l50 34 0 -50 0 -50 90
0 90 0 -2 463 -3 462 -87 3 -88 3 0 -41 c0 -22 -2 -40 -4 -40 -2 0 -30 16 -62
35 -32 19 -74 40 -94 45 -41 12 -194 21 -230 14z m186 -180 c103 -35 169 -104
199 -208 38 -131 -19 -294 -126 -362 -165 -104 -384 -46 -465 124 -23 47 -28
71 -28 138 -1 74 2 87 34 150 73 142 236 209 386 158z"/>
<path d="M4474 5297 c-3 -8 -4 -216 -2 -463 l3 -449 93 -3 92 -3 0 466 0 465
-90 0 c-67 0 -92 -4 -96 -13z"/>
<path d="M6080 4845 l0 -466 93 3 92 3 3 463 2 462 -95 0 -95 0 0 -465z"/>
<path d="M8060 5299 c-126 -21 -242 -102 -299 -209 -52 -97 -61 -163 -61 -452
l0 -258 90 0 90 0 0 228 c0 125 5 256 10 291 23 136 87 203 223 231 l57 11 0
85 0 84 -27 -1 c-16 -1 -53 -5 -83 -10z"/>
<path d="M8280 5300 c0 -5 95 -201 212 -434 l212 -424 -68 -144 c-38 -78 -71
-149 -73 -156 -4 -10 16 -12 93 -10 l98 3 108 230 c161 344 200 427 330 694
65 134 118 246 118 247 0 2 -46 4 -103 4 l-103 0 -154 -331 -155 -332 -52 109
c-29 60 -96 201 -148 314 -52 113 -99 212 -104 220 -6 11 -32 16 -110 18 -64
2 -101 -1 -101 -8z"/>
</g>
</svg>
);

export default LogoIcon;