"use client";

import React, { useEffect, useRef, useState } from "react";

const FPS = 30;
const FRAMES = [
	"                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                   ,                                                                                                                                                                                    \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n           !                                                                                                                                                                                            \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n       \"                                                                                                                                                                                                \n                                                                                                                                                                                                        \n                                                                                                                                                                                                        \n           ?`                                                                                                                                                                                           \n                                                                                                                                                                                                        \n                    `^^                                                                                                                                                                                 \n                        !..                                                                                                                                                                             \n                        ..~.                                                                                                                                                                            \n.                         ;i_                                                                                                                                                                           \n,.                          `~`l                                                                                                                                                                        \n\\l;                            \"i^                                                                                                                                                                      \n\"  '?'                           ,t1.                                                                                                                                            '                      \n!]:  :}];`                          ;\\;                                                                                                                                                                 \n .~1:^ \\:llI                          ~J{^                                                                                                                                                              \n     {}.  ^+?1:                         .v{I                                                                                                                                                            \n    ' ^?[^,`'1[?`                          fc|                                                                                                                                                          \n:;.      l\\]~^\"ij??.`                        ;uu\"                                                                                                                                                       \n_?]~;^     ~jt}`:_()+;\"^                        /q|                                                                                                                                                     \n]}-_];`^  .   1Cf?:]|j/;~\\                        [Jr`                                                                                                                                                  \nrn){\\!~]-:~`'  'i/z(i!|f()t_'                       _Jc[^  .                                                                                                                                            \nqj1zx[/|]{_:`l   ``}czu)jvu\\r1:                       jmmmwJ{                                                                                                                                           \nxLUxxYY/j|1{~l^ ^'    ?U0OwLCX1un\\]]`                  ]w#&&0} '                                                 l                                                                                      \n0JrqUzYQYxt(\\~-i\\``     /ZJ]}rQpbkbw\\|:'                :n0v  U_                                                                                                                                        \nU0ZYZkqZCCQz[iIlI_-l\"\\        .)h&&#Q(,                                                                                                                                                                 \nf\\Y*MMWhZv\\fJm[]I[?\"i,\"`\"'     `/JUf\":,   ^`                                                                                                                                                            \nncx/JZmZfxwOzLYqY(_}i;~-i^'     .        xokn                                                                        `.                                                                                 \nucx(][\\j/jttJpLQYOr~_+~]I; \" `  `         .                                                                            l]{r+                                                                            \n0ZYxftr|tf|jX|OmwZ0wu}}\\_~~.'  `                                                                                        m&bnI                                                                           \nCUCY/njff{|xcjtYJdbLwqv/]]+{?iI\"..  \\                                                                                    X.                                                                             \nXfjxXLJJxxr|?JYc}fOkbddbLcjx?-]};. '  '                                                                                           _Y                                                                    \nUrxQjczmU(n||x//Yut\\mwbhadvv/j-}j}{~,\";`^                                                                                                                                                               \nqcCUcUJLYCZx/nfv?)/Ur/udpoakbmzvznff~[^\"                                                                                                                                                                \nQUZznLczUUQQmOUzv\\f()/LxvmaooakdwZ0j[-+'^                                                                                                      mq                                                       \nLvULUccCOxvUUzcCmJXxfj||(ruZbM#M##owQu-!                                                                                                                                                                \nqdOCJLUYUCLUxxQ0XCLXznft/\\nYzhoW&WW#Z/]''                                                                                                        ]Y_'                                                   \n00Q0ZCCYXuLYCzXYxuO0mmJzYYutxcLo&8&W0|~_ .                                                 `                                                   ,&bX_                                                    \n0wmCYLwpLtzJZqzuurxYUmkqmOmLYrfzUOZX1l\\                                                      rX_                                                  '                                                     \nqqmqOQ0UXzmXYXrzYYuCzXn0dpqmUXxnY\\?l;l;`^`^                                                   u+                                                                                                        \nhbdbbOLLYXvcYZZJcfvvrYYxYCOwOzYrfu\\\\{+;l \\\"` ^                                                                                i|xl                                                                      \n*oddZCz0ZOLYYXUCCYczzJrzunCwbbwmYrff1~;';_)l^                                                                                 ?MZ^                                                                      \nWodO00ww0XYQZCUXzYJLCzvYXc/vq*MqY([)|(|_Il/:'^ ;`.                                                                                                                                                      \nkqOUCQwUJLL00YZqZJQC0CYXUzcYzYjn||i[i])x\\|ii::,\\i,                                                ^                         \\                                                                           \nZL0dOzvJ0YJJCqJLZqwQCCwJUujruff\\/\\{+1})-|vf)--i;\"!\\                                          \\         :                   Um                                                                           \ndq00OmZLLXOCOzX0LUJppQUUmJvxuuvj\\/1-|-+|\\{)JYj1]{+l'                       .                                            l,                                                                              \nkqmkdCYqd0CQmLCXzOZ0LmqCYCUYjvunv\\)]?)?j_11|\\v0c1]]~:                                               ',                   \\Lv.                  )i                                                       \ndqdp00w0Qwp0C0OC0ULqp0YLqJzU0vzx\\fff)/|1-]|t|zzUOCn}^                                                 ,                   ;b8)                                                                          \n#odbbqwm0Z00dw0LQ0UUUCqmCw00XU0UUj\\/vf/1((?|vUJJmmOC\\;``   .                      :              \\,     \"                                                                                               \n*haahhkdqwZ0JqhqZQOCCYYUZYLLOXvUQxjr\\\\xujYcx([)1jJ/!I\\zCu/{\"                                       ;      \"    +:                                 ]                                                     \nbpk**ohkhpdqqOZd*bp0OCOQYXQ0UCwzUCLv/\\x/vnuvr][-];~[!:`\\|i'        .                                 !-                                                                                                 \ndkhkba#oa*odpddqOZdaakZJuXzYLJzc0UYLUvfn/|1xzn)-?+;;^11\":   .                                 `        'r;   :{                                                                                         \nbppddbooM*o*habbdqmmQQ0qpOLJUUUUuYUcXLU)/\\jrffu/}I]!l^;I:     l;                          ;\\!`           `p#Z  \\?-                                                                                      \nbbmwqqpko*MMMMohhddwpwUCzLZLvtzCzLCcJzJOuf/|/}/Yxj1_}_;\";~!l:  :\"                   ^                                                                                                                   \nbbhopqqqdaM&&&&&*hddOmOUCQcjXJJzfYcc0vzCJUcvfjtrCUv\\~+}j;I\"-|{{^^\\':                  !]                             `c                            ]                                                    \nhhahbho*hhM8888&&WM*okmZYvrzYJvUUJvYvUJvXuCLxzUxvxzvzv}]][1i\"!c\\[;;)\\'\\                                                1ux_:,^^`                                                                        \nZbh*ok*ooM#*W88&&W##dwOYzLb0LQLLzCULJxczLczYQmO0QJvnzdUvu_il~_,+OU/'     .                                               vq*##kZ0\\                                                                      \nbpqdkoa#**##**aoM*hkkZQpb0QYYqCUCzXUcUXvcJYLYJOaOrxx1}(?[[xj([\"1+``!)t\\  i                             ^                  -dWW#hx                                                                       \ndhhbhkqbb*odhmphoZmmhmqoq0qhL0ZQpLJYvuvcCuzzXLJJJXXv{f1|[~_rf~:,+\\!' i_I   . \";'                         vv                xML    _                                                                     \nCqZdkhbkbmokZqm0YZXCwb0dwqaqwohqmmZCzUzYxcOzjvYJLUmQnj[ujr(!{ii\\\\:-i,.~^\\1l ;`]                                                                                                                         \ndqkpmZwpdakbdmp0mLhdmQUQbhamdhphhLQC0OXvvXcnXUUzvhwUqOvf\\fx(1+_ \\z; ,t~ t] \\vl                                                           a~                                                             \nhbdOwwbpZZZdbbdhqqqqb*kZQQhhhqqhpbomLLLXLvCzJYYnjrxOOcQZvn\\\\|1[1j.`?-.!\\}  ; ]Cx.  ;`-`                                                                          \\                                      \ndbqdQqCqOpqZwh&#apbQ0ZZZoaOqdbkapadbadOzCYXCYJuJYjuxffmLbpZYvjjj)l:l+_?: \"-;,;\\\\jz+. -`!'                                                                         \"v/                                   \nqbhbbpZppppwmdwbMadLbp0Om0mbwwZdbbqhhhhqm0QCUC0UvUxvUYjrQwqdwCJx\\\\ll~\".;[j:`~{\" 'fUJvn~+\\}        |                                                                                                     \nvdbqkkkkhqwbddqmmZOOZwwpmZmZOwqZOqbbbpbhkmOZZOUCzxULYncUfvYqbhqQLzJu/1_!   l[. f-  )xqYf1[J\\                                                 -a1^                                                       \ndzLkobqdkbbkkqdmqwZ0OZmOOOZ0Qm00mOLdkhbphbqmqwmOJczX\\zLxrjcccOha**abZU[;,     ?1 ^u, ]vCOzxU0(;  .                                                 \\M*w                                                 \nLZmLJwdohpahpbbqqqppZZL0Z0YmmOU0OZmOmmdbqwbhbppdpm0Jzzuujnr\\|zCq&8M*mY}`, '      |},1\\_;/OpkOwdJ?`                                                                                                      \nq0QpdmdwmwokkakppddmdqqZZmQ00LmZ0QLLZmLmppbqkaoaohqQvJzvutfjjvx1CZmYO0mj(i`         j\\iuYnuQW&oqqZf'                                                                                                    \nhabddkho*bwmpahhabbbpdddwwqmQOZLZ0OCZZ0mZOqdbmdabpqZcLQCx\\Yrfxrjrrzx}_{rCCY|~          (Qu\\jxz0Jl.fdO/!.?.\"`                                                                                            \nW#dmC0dpbk*obpqkkhkhkkdkpdmqdqmL0QLOOCYYQmw0qkakqbqZOdqqOYuzcnff\\C\\(|v_,l\\Ld0fi\" `!   _  \"nu{[lfzX/^]qohdUl                                                                                             \nWWaZZLqZbbdbh*obbkaboahhkbddddqwmO00LJLUxzLZbdao*kqhdmdOZJJnf/|\\?-/vuf|tx1?+\\whmZz_  :    \\mLvCYj|LUZvo&on-+ \\    '\\\"   lYOqv;                              `I                                          \nokqmOZpCQaobbkh**hdhoo#oaaakdbbpwqwmmQCUCJUQOkqqOqkkmmddQUXJvv\\t/{~]fXcjjjx/)}ZMaY;         )OXUOpZzZqbm\\;'    .|__l ^   L#8#OI                                      :1            +                    \n#*akdqqZQZmdhkdbh*Mooo##*#*akbbddqpppqZUUCYYXYUJcLmqoohdkm0QUYjff|j(f}v/nLYzfv/?[l(l         .fLCZabpmqaobz?;I           \\M&Yl                                    ;{Qdao\\                               \n*a*ohkbdqpqkhhoaaha*o*#*oooaoaoakdddbqwQ0CUUYLXYUzjzZmdohadqLUcCvf/}}vrt?tX|vQmz-;]?]]          tmkbk*hhMMom\\I^                                                      vLzf,                              \nhbbko#ooohbdddbaoo*a*#ahooohao#ooohdkdppOOJCccrrrxf\\nxcd&**adZzCLmUtj\\)(t}~t/f0LQzI^:(_l   `     \"Co*o**a*#pYr]-;                                                          I`                           \n&#koo#MM*hdahbhhhh*ooodpppqbkhhhaaohkhkqdmmJXxccun/jnfxujYmqppbmZLZLCUuxt/1+}~zCZqmf)_`:\\nl:       ^0*M*#*km0vjn` !                   .               \\                   `~d#;^                        \n&&oaoMMW&&Wobqdo#hdkhbh*akbkhbbkkahhkhhhbdZwQ0XXYXt\\cr\\fvn\\YzwhhhddbppZUXU\\{|,;,\\**dOwvj\\\"_Cu{t:    [moWMMMMob0J_|         I           ~x.                               \"Yt+f[\\                        \nhdkhko&&&88&&MaddahhdphbaaoahhkdddkhhhhhhbdpmmLQCYXYtuvvf/tYznXO*&8WowLJqmUxz;l.  !xpabbhOf}(Qhz\".   jdM8&&&&obx]\"                        i}                            !upX|vu+                        \ndqqqqdM8&8&&&&&#bbhkdbhbdqZqpqdokbqwbaaaabkkdqqZQYzYYOCLXf|x/jxvUdMW#Zuuf{\\];,^ '   .}wbkkha0Cv/]-`   1ZoWWMbOmLY,              \"    ^ii    -                           ICdbZu~+  ^^                    \nqwwqq0Cd#W&&&888Mabqk**hhdkqqqmwqbhhpqdaoo***bbpwq0CzzUuOU/jj//(t]n|[{}_}-~)]^  .:      ;Yka***odC}lI        `1zYl              \\      ;     ~0f-                        c&W*qu):.   ^                  \nOmZmwwZZqqbhMW&&WMohqqpqZwZZqpqdOZmZbaowbo#M&&#ohpmmmUCUUYZQvfu\\ff1?+l~-?\"ii\\``^  !.      -0a&W*du                                   :  .     \\o#v                         ]}^   .\\ub#| !               \nbdwZZ0Qqppqa88&&&Mokqah*hbOmZZOCC0wqqwqkahhW&8&#kpwmOJZUCvxjJCXt/fz\\]!\\`!i:`;:  .          ]-:i)1                                    ?_ ;                            :  \\^               (i\"            \n*hhwmOZOOqwqh*&&&&&&*kbhhkdbbbhdkppdmdbdhahhkhho*amOCw0CJzXx(UmYxx1x\\t+!?+:~:^  ,                                                      }z})\"                                               xd#Wc        \n**WabqZOOpqwmoaW88&&8&Wokpbbpqqdpddbkahbhhah#odbaaadQCZOCUQzLU/CLrfjjfu\\|-I ':\" .                                                        `!c|                                              ?w&&ar       \nWao*abqOZQmqpObk8888888&&*dkbwOwqOqbhao#*ooooa#hbkddbbwZmO0XUCcYx|UCtv\\|Of(?[i^                                                   }X       ^Ykx`              ^                              ZoaO+.Cm~  \naoohhhhpw0qmqpqdmb&88&&&W#kqmdqwd0qpdko#&WoahboaokppwdbbOOZdmJruYLjuZOfjnvzzv)`\\:':                                                          \\Qwdbb                                   .                 \nhoahkbbkdZZmOZoMO0whddqqdkdpdpqqqwpLpbhhkbbdkdodb**hhdhbobZpqp*kUnunY\\XO((|ZkOv-\\.'                                                           JM&*aU                                                    \n****ooakkhm0ZmCJn0OdZd#*oaaoooo*hkbdqbpakabbaqqbabk*M##*oaoowZqqqqqUuxr/vmX|xLL0Y|\":                                                                            i                                       \n###***oohdpmQQJcX0qako**##*W#**#*oha*kaobbhhkhbkho*o*o*&M*hdbhowZmdpqX/xuf0dQQYjYmJ0]\";\"^                                                                                                               \nWMM##****aqwZLCLJYQddkh*W8&&&M***oohaao*ohoahaaaaohk&8&&M*hbbdobhbZpbhqLr)(xQZwOYjvwwpC)?\\    ^       ^                                                                                                 \n&WW&WW&&&WbZqZk0CQUrLmmbbo*MMWMM#ahkhohooaoooakaobhqo*aoobkdbqbkpho*opbbLLux/\\/Qdq0UJmdhdx-'^..                                                                                                         \n&&WWW&&8&8&#hqZdbwmZ0OJLLm0qh*ohaoaa*haoo##ooM##aoahahoopdbbbhahhobho**aadqCLzxjxYwdQmqpkhkdJ/1!:   i\"                                                                                    }             \n&&&&&&&&&8&&&*bahpkwZqwOQmCLUUZbahoooMM*hao#*o*ao*oaaakkabbpkaMMMWMMobhaoMM#*d0LYnujc0QZmOb**omj/njzc1l                                                                                                 \n&&&&&&&8888&8&WMqaohkwLCOmdmmZ0QZZphooM8M#***ooooooo*oahahbkkd*&8&&M#adwmk*#WMM*opqJtr}|00ZqZkoM#**okLxl                                                                                                \n888&&&&888888&&&Wkk#odwmQLqqw0ZZmZqqkkaoao#**ooooooaooo*oahaadwa*Mahbhkhhkpbdpbhh*qOQLzj?_]0khMM&W&&M#k0jl                                 \"I        `                                                  \n888&&&&88888&88&8&Mdb*hdO0U0ZdqdkdbhbpqhbhaaaooohhaooaoohohooobkahpwmZmmb**#*M&WMhd0YjxvXXXzQda&&888&&MoL]                                   ]?i,  `   ;?\\                                              \n8888&&&&&&888&&888&&&amddqZZZqmwdbbbbkhdqdddhohoao*ahaahahhhaoahkahdw0Opakhhodb*apZJv/t|xxUQpwb&8&&&&WM*qu-                                   \"11\\?_  -]_vJ~                                            \n88&&888&&&&8888&88&8&&MbwmqZOO0ZmppdkhhakbkddbhaaaaaahhhahkhhhaohhhhkhZpb**MkwUzxju|\\}xXvnuULLmpM&&WW###*0/I`                                    ^YpkJjli|v0wkj                                         \n88&8888&&&&&88888&&&&&&*pqppZm0OZZwqqqqwbhhahkkbhkhaaha*haaohbdbhhooa*bmmwLYUuvn\\t1\\zr\\fUqbhkkZOahqCC0w*MbU?`                            :C!        fh#kLzCaMMm-                    mC                  \n8888&&&&88&&W&WMM#o*#MM#*obdbdhhhbpqwqpdpbkahhooakbhkho#**oabbwddq*WW#hbmZQJr|tx/Yj\\r\\jnu0WaLJL\\!|{ujxj}]I                                           \\r#&&Moq~                                          \n&8&&&&&&W&WMM#*oa**#WWMMMMM#*hh*&#hhwmwpqbko*o***ooookkao*#*okppddwbokhdmZmmYr\\jjYzutjt1~\\Cti\\nY-\"                               ^'                    )JqbbY                                           \n&8&&&&&WWMM****#MWWWMMWW&&&8&&W#&&#obw00wqwbhaa*aa*#M#*ohhho#**ahbqZpmbhdZwCwZUzrzzYY)(?(_\\i_~_ZQ|\\                                oOI                                                                  \n&&&&&&&WMMM#oho*##M&&&8&&&88&WWohaadmLOZmpbqdkhaooa#&WM#Mooaoh*MM#oohdbkqddw0OLOmQJJcLuj]+~!:'}~0qY}'                                                                                                   \n8&8&&8&&WMMWWW&88&8&&&&&&&&&88&WobhbOXYOqqqZdbbkaooo*o*###M*ohaao##W&MMohabbOUvxuvJ0LLLXux[iIi,:]]/dZu:                                                                                                 \n8888888&&WMMWW&&888&&8888&W&&88&W*okq0LCcJLZpbkaaaooaaooo**MM**ah*M&&WWMM#*ahdwm0LLJzYYu)xYut]l;.^\"f1YdhZx+~'                 lfc+                                                                      \n8888888&&&&&WWM&&&&&&&888&&WMMMW&MhdQJCuUYYXLmqbhhaoooo*oo##MM#WMMM&&&&8&&WM*okqZwmmZJcvnvXv/Unc\\~!'`:|u0*Mpt:.          :     ^v;                                                                      \n888888888&&&&&M*#&&&&&888&&&#*aobkbq0CzUcYCZO0wmpdhoooo****###MMWWWW&88&&&&W*ahqqw0ZOO0CCJzY/}fLxl`'  `\\uJU|-\\                                                                                          \n8888888&&&&&&8W*dwk*&&&8&8&&*ooh**bqqdmZwmmqmmmqmddbkha****#MM###M##W&888&&W#ob0UCCULmZZU\\?_-{\\1         \\~:}j~`                                                                  ;                     \n8888&&&WW&&&WWWM*oooW*M&&8&&WkoappkabooM&W*abpmZmZmqdbbo**#*#MMMMMMMMWWWWWMM*hbdOOLLcXYtx/uU(;^[_            1(CCfl                                                                  ,txI               \n&&&&&&&WM&&&&W**#*#&8&&M*o*WW&*ohhabbaM&&W#oqqOL000Zpwpbbk*##MMMM#MM****oMMoopqmmbbpLCY\\_11,:^ {(~             (CYap),              \\] \\+                                                               \n&&&&&&&WMMW&&&M**oo#MMMW#opkbadhaaao*aha#M*oddwmOYZO0Zmqdbkka#*MMMM#ooaoMoo#M*dpwmmOdd0UXu{i:   .\" ]]   .        !UkOc'   `             )l                                                              \n&&&&&&WWMohboM&Whh***o*Mak***ohhha*oo*o***#W8&#*kwZQYCZL0Zqbaoao*MMM*hbbha*M*ohdwZqufzXqOUrzz}l!     \"i'            ~)                                                                                  \n&&&&&&&W*ohb*oo#*oa**oa#*oo**MooWMhhM#**M*WWW&&WaqQQQ0mmZZwmdabo&&&W#adqdb*&&Mob0UCzf/cU0dLn\\faoZ1\\      ,         j]|~                                                                                 \nd*&&&&&WMdoabkobhooaM8M#*##*#M8&&&WW&8&8&MMM**apZzJLQmO0OwpwZmmoo*WM*adwmqmZpdYO0qwCJYvUvvc*oCct+^         ;           ^          !~'                                                                   \nMMh*&&&MWMhhkokhaqpqda*M#*MW&MW8&8&&&8&88888W#*pQ0CQCLUZmZOmmmqZpkhdpqmmpZUc)1?\\}/rbMhZQYx|~!l+ !^            ~!^:        \"        0U^                                                                  "
];
const APPEARANCE = {
	"backgroundColor": "transparent",
	"borderRadius": 0,
	"fontFamily": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
	"fontSize": 8,
	"fontWeight": "normal",
	"fontStyle": "normal",
	"letterSpacing": 0,
	"lineHeight": 0.78,
	"showFrameCounter": false,
	"textColor": "#79a4ff",
	"textEffect": "none",
	"gifUrl": "https://i.pinimg.com/originals/80/b7/5e/80b75eb774b647c67b2efa531b57ba13.gif",
	"useColors": false,
	"textEffectThreshold": 0
};
const CHARS = " .'`^\\\",:;Il!i~+_-?][}{1)(|\\\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

export default function D14d3138fa6e1de18748c308539e49a7() {
	const [currentFrame, setCurrentFrame] = useState(0);
	const [scale, setScale] = useState(1);
	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLPreElement>(null);

	useEffect(() => {
		let animationId: number;
		let lastTime = 0;
		const frameDuration = 1000 / FPS;

		const animate = (time: number) => {
			if (!lastTime) lastTime = time;
			const delta = time - lastTime;

			if (delta >= frameDuration) {
				setCurrentFrame((current: number) => (current + 1) % FRAMES.length);
				lastTime = time - (delta % frameDuration);
			}

			animationId = requestAnimationFrame(animate);
		};

		animationId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationId);
	}, []);

	useEffect(() => {
		const measure = () => {
			const container = containerRef.current;
			const content = contentRef.current;
			if (!container || !content) return;

			const availableWidth = container.clientWidth;
			const naturalWidth = content.scrollWidth;

			if (availableWidth > 0 && naturalWidth > 0 && naturalWidth > availableWidth) {
				setScale(availableWidth / naturalWidth);
			} else {
				setScale(1);
			}
		};

		measure();
		const observer = new ResizeObserver(measure);
		if (containerRef.current) observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, []);

	const effect = APPEARANCE.textEffect;
	const needsStyles = effect !== "none";

	return (
		<div
			ref={containerRef}
			style={{
				backgroundColor: APPEARANCE.backgroundColor,
				borderRadius: `${APPEARANCE.borderRadius}px`,
				color: APPEARANCE.textColor,
				display: "flex",
				flexDirection: "column",
				fontFamily: APPEARANCE.fontFamily,
				overflow: "hidden",
				position: "relative",
				width: "100%",
			}}
		>
			{needsStyles && (
				<style dangerouslySetInnerHTML={{ __html: `
					@keyframes ascii-rainbow { 0% { background-position: 0%; } 100% { background-position: 200%; } }
					@keyframes ascii-burn-neon { 0%, 100% { color: #ff3300; text-shadow: 0 0 20px #ff0000, 0 0 40px #ff3300; } 50% { color: #ffffff; text-shadow: 0 0 10px #ffffff, 0 0 20px #ffaa00; } }
					@keyframes ascii-neural-pulse { 0% { filter: hue-rotate(0deg); } 50% { filter: hue-rotate(180deg); } 100% { filter: hue-rotate(360deg); } }
					.ascii-effect-video { background-image: url('https://i.pinimg.com/originals/80/b7/5e/80b75eb774b647c67b2efa531b57ba13.gif'); background-size: cover; background-clip: text; -webkit-background-clip: text; color: transparent !important; }
					.ascii-effect-gradient { background-image: linear-gradient(45deg, #ff4c4c, #b3ff4c, #4c99ff, #4cc3ff, #b34cff); background-size: 200%; background-clip: text; -webkit-background-clip: text; color: transparent !important; animation: ascii-rainbow 5s linear infinite; }
					.ascii-effect-burn { animation: ascii-burn-neon 1.5s alternate infinite ease-in-out; }
					.ascii-effect-neural { animation: ascii-neural-pulse 3s linear infinite; text-shadow: 0 0 10px rgba(0, 100, 255, 0.5), 0 0 20px rgba(0, 50, 255, 0.3); }
				` }} />
			)}

			<div style={{ transform: `scale(${scale})`, transformOrigin: "left top" }}>
				{APPEARANCE.showFrameCounter && (
					<div style={{ opacity: 0.5, fontSize: "10px", marginBottom: "8px" }}>
						Frame: {currentFrame + 1}/{FRAMES.length}
					</div>
				)}
				<pre
					ref={contentRef}
					style={{
						fontFamily: "inherit",
						fontSize: `${APPEARANCE.fontSize}px`,
						lineHeight: APPEARANCE.lineHeight,
						margin: 0,
						whiteSpace: "pre",
						...(effect === "matrix" && APPEARANCE.textEffectThreshold <= 0 ? {
							color: "#00ff00",
							textShadow: "0 0 10px #00ff00, 0 0 20px #00ff00",
						} : effect === "neon" && APPEARANCE.textEffectThreshold <= 0 ? {
							color: "#ff00ff",
							textShadow: "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff",
						} : effect === "glitch" && APPEARANCE.textEffectThreshold <= 0 ? {
							textShadow: "2px 0 0 red, -2px 0 0 blue",
						} : {}),
					}}
				>
					{(() => {
						const text = FRAMES[currentFrame];
						const threshold = APPEARANCE.textEffectThreshold;

						if (!text || effect === "none" || threshold <= 0 || !CHARS) {
							return (
								<span className={effect === "none" ? "" : `ascii-effect-${effect}`}>
									{text}
								</span>
							);
						}

						const thresholdIndex = Math.floor(CHARS.length * threshold);
						const affectedChars = CHARS.slice(thresholdIndex);
						const effectClass = `ascii-effect-${effect}`;

						const effectStyle = 
							effect === "matrix" ? { color: "#00ff00", textShadow: "0 0 10px #00ff00, 0 0 20px #00ff00" } :
							effect === "neon" ? { color: "#ff00ff", textShadow: "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff" } :
							effect === "glitch" ? { textShadow: "2px 0 0 red, -2px 0 0 blue" } :
							{};

						const result = [];
						let currentBatch = "";
						let isBatchAffected = false;

						for (let i = 0; i < text.length; i++) {
							const char = text[i];
							const isAffected = affectedChars.includes(char);

							if (isAffected !== isBatchAffected && currentBatch !== "") {
								result.push(isBatchAffected ? 
									<span key={i} className={effectClass} style={effectStyle}>{currentBatch}</span> : 
									currentBatch
								);
								currentBatch = "";
							}
							currentBatch += char;
							isBatchAffected = isAffected;
						}

						if (currentBatch !== "") {
							result.push(isBatchAffected ? 
								<span key="final" className={effectClass} style={effectStyle}>{currentBatch}</span> : 
								currentBatch
							);
						}

						return result;
					})()}
				</pre>
			</div>
		</div>
	);
}