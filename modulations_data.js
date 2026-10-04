const CIRCLE_MODULATIONS_DATA = [
  {
    "num": 1,
    "title": "1. C Major \u2192 G Major",
    "fromKey": "C Major",
    "toKey": "G Major",
    "targetKey": "G",
    "keySig": "G",
    "circleAngle": 30,
    "chords": [
      {
        "index": 0,
        "name": "C",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[EGc]",
        "lhABC_whole": "[C,C]",
        "rhPitches": [
          "E4",
          "G4",
          "C5"
        ],
        "lhPitches": [
          "C3",
          "C4"
        ],
        "midi": [
          48,
          60,
          64,
          67,
          72
        ]
      },
      {
        "index": 1,
        "name": "Gm/Bb",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[_Bdg]",
        "lhABC_whole": "[_B,,_B,]",
        "rhPitches": [
          "B-4",
          "D5",
          "G5"
        ],
        "lhPitches": [
          "B-2",
          "B-3"
        ],
        "midi": [
          46,
          58,
          70,
          74,
          79
        ]
      },
      {
        "index": 2,
        "name": "A7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[A^cg]",
        "lhABC_whole": "[A,,A,]",
        "rhPitches": [
          "A4",
          "C#5",
          "G5"
        ],
        "lhPitches": [
          "A2",
          "A3"
        ],
        "midi": [
          45,
          57,
          69,
          73,
          79
        ]
      },
      {
        "index": 3,
        "name": "Abmaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[_Acg]",
        "lhABC_whole": "[_A,,_A,]",
        "rhPitches": [
          "A-4",
          "C5",
          "G5"
        ],
        "lhPitches": [
          "A-2",
          "A-3"
        ],
        "midi": [
          44,
          56,
          68,
          72,
          79
        ]
      },
      {
        "index": 4,
        "name": "G",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[GBdg]",
        "lhABC_whole": "[G,,G,]",
        "rhPitches": [
          "G4",
          "B4",
          "D5",
          "G5"
        ],
        "lhPitches": [
          "G2",
          "G3"
        ],
        "midi": [
          43,
          55,
          67,
          71,
          74,
          79
        ]
      }
    ],
    "abc2Bar": "X:1\nT:1. C Major \u2192 G Major\nM:4/4\nL:1/4\nK:G\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"C\"[EGc] \"Gm/Bb\"[_Bdg] \"A7\"[A^cg] \"Abmaj7\"[_Acg] | \"G\"[GBdg]4 ||\n[V:LH] [C,C] [_B,,_B,] [A,,A,] [_A,,_A,] | [G,,G,]4 ||",
    "abc5Bar": "X:1\nT:1. C Major \u2192 G Major\nM:C\nL:1/1\nK:G\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"C\"[EGc] | \"Gm/Bb\"[_Bdg] | \"A7\"[A^cg] | \"Abmaj7\"[_Acg] | \"G\"[GBdg] ||\n[V:LH] [C,C] | [_B,,_B,] | [A,,A,] | [_A,,_A,] | [G,,G,] ||"
  },
  {
    "num": 2,
    "title": "2. G Major \u2192 D Major",
    "fromKey": "G Major",
    "toKey": "D Major",
    "targetKey": "D",
    "keySig": "D",
    "circleAngle": 60,
    "chords": [
      {
        "index": 0,
        "name": "G",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[B,DG]",
        "lhABC_whole": "[G,,G,]",
        "rhPitches": [
          "B3",
          "D4",
          "G4"
        ],
        "lhPitches": [
          "G2",
          "G3"
        ],
        "midi": [
          43,
          55,
          59,
          62,
          67
        ]
      },
      {
        "index": 1,
        "name": "Dm/F",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[=FAd]",
        "lhABC_whole": "[=F,,=F,]",
        "rhPitches": [
          "F4",
          "A4",
          "D5"
        ],
        "lhPitches": [
          "F2",
          "F3"
        ],
        "midi": [
          41,
          53,
          65,
          69,
          74
        ]
      },
      {
        "index": 2,
        "name": "E7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[E^Gd]",
        "lhABC_whole": "[E,,E,]",
        "rhPitches": [
          "E4",
          "G#4",
          "D5"
        ],
        "lhPitches": [
          "E2",
          "E3"
        ],
        "midi": [
          40,
          52,
          64,
          68,
          74
        ]
      },
      {
        "index": 3,
        "name": "Ebmaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[_E=Gd]",
        "lhABC_whole": "[_E,,_E,]",
        "rhPitches": [
          "E-4",
          "G4",
          "D5"
        ],
        "lhPitches": [
          "E-2",
          "E-3"
        ],
        "midi": [
          39,
          51,
          63,
          67,
          74
        ]
      },
      {
        "index": 4,
        "name": "D",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[DFAd]",
        "lhABC_whole": "[D,,D,]",
        "rhPitches": [
          "D4",
          "F#4",
          "A4",
          "D5"
        ],
        "lhPitches": [
          "D2",
          "D3"
        ],
        "midi": [
          38,
          50,
          62,
          66,
          69,
          74
        ]
      }
    ],
    "abc2Bar": "X:2\nT:2. G Major \u2192 D Major\nM:4/4\nL:1/4\nK:D\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"G\"[B,DG] \"Dm/F\"[=FAd] \"E7\"[E^Gd] \"Ebmaj7\"[_E=Gd] | \"D\"[DFAd]4 ||\n[V:LH] [G,,G,] [=F,,=F,] [E,,E,] [_E,,_E,] | [D,,D,]4 ||",
    "abc5Bar": "X:2\nT:2. G Major \u2192 D Major\nM:C\nL:1/1\nK:D\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"G\"[B,DG] | \"Dm/F\"[=FAd] | \"E7\"[E^Gd] | \"Ebmaj7\"[_E=Gd] | \"D\"[DFAd] ||\n[V:LH] [G,,G,] | [=F,,=F,] | [E,,E,] | [_E,,_E,] | [D,,D,] ||"
  },
  {
    "num": 3,
    "title": "3. D Major \u2192 A Major",
    "fromKey": "D Major",
    "toKey": "A Major",
    "targetKey": "A",
    "keySig": "A",
    "circleAngle": 90,
    "chords": [
      {
        "index": 0,
        "name": "D",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[FAd]",
        "lhABC_whole": "[D,D]",
        "rhPitches": [
          "F#4",
          "A4",
          "D5"
        ],
        "lhPitches": [
          "D3",
          "D4"
        ],
        "midi": [
          50,
          62,
          66,
          69,
          74
        ]
      },
      {
        "index": 1,
        "name": "Am/C",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[=cea]",
        "lhABC_whole": "[=C,=C]",
        "rhPitches": [
          "C5",
          "E5",
          "A5"
        ],
        "lhPitches": [
          "C3",
          "C4"
        ],
        "midi": [
          48,
          60,
          72,
          76,
          81
        ]
      },
      {
        "index": 2,
        "name": "B7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[B^da]",
        "lhABC_whole": "[B,,B,]",
        "rhPitches": [
          "B4",
          "D#5",
          "A5"
        ],
        "lhPitches": [
          "B2",
          "B3"
        ],
        "midi": [
          47,
          59,
          71,
          75,
          81
        ]
      },
      {
        "index": 3,
        "name": "Bbmaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[_B=da]",
        "lhABC_whole": "[_B,,_B,]",
        "rhPitches": [
          "B-4",
          "D5",
          "A5"
        ],
        "lhPitches": [
          "B-2",
          "B-3"
        ],
        "midi": [
          46,
          58,
          70,
          74,
          81
        ]
      },
      {
        "index": 4,
        "name": "A",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[Acea]",
        "lhABC_whole": "[A,,A,]",
        "rhPitches": [
          "A4",
          "C#5",
          "E5",
          "A5"
        ],
        "lhPitches": [
          "A2",
          "A3"
        ],
        "midi": [
          45,
          57,
          69,
          73,
          76,
          81
        ]
      }
    ],
    "abc2Bar": "X:3\nT:3. D Major \u2192 A Major\nM:4/4\nL:1/4\nK:A\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"D\"[FAd] \"Am/C\"[=cea] \"B7\"[B^da] \"Bbmaj7\"[_B=da] | \"A\"[Acea]4 ||\n[V:LH] [D,D] [=C,=C] [B,,B,] [_B,,_B,] | [A,,A,]4 ||",
    "abc5Bar": "X:3\nT:3. D Major \u2192 A Major\nM:C\nL:1/1\nK:A\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"D\"[FAd] | \"Am/C\"[=cea] | \"B7\"[B^da] | \"Bbmaj7\"[_B=da] | \"A\"[Acea] ||\n[V:LH] [D,D] | [=C,=C] | [B,,B,] | [_B,,_B,] | [A,,A,] ||"
  },
  {
    "num": 4,
    "title": "4. A Major \u2192 E Major",
    "fromKey": "A Major",
    "toKey": "E Major",
    "targetKey": "E",
    "keySig": "E",
    "circleAngle": 120,
    "chords": [
      {
        "index": 0,
        "name": "A",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[CEA]",
        "lhABC_whole": "[A,,A,]",
        "rhPitches": [
          "C#4",
          "E4",
          "A4"
        ],
        "lhPitches": [
          "A2",
          "A3"
        ],
        "midi": [
          45,
          57,
          61,
          64,
          69
        ]
      },
      {
        "index": 1,
        "name": "Em/G",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[=GBe]",
        "lhABC_whole": "[=G,,=G,]",
        "rhPitches": [
          "G4",
          "B4",
          "E5"
        ],
        "lhPitches": [
          "G2",
          "G3"
        ],
        "midi": [
          43,
          55,
          67,
          71,
          76
        ]
      },
      {
        "index": 2,
        "name": "F#7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[F^Ae]",
        "lhABC_whole": "[F,,F,]",
        "rhPitches": [
          "F#4",
          "A#4",
          "E5"
        ],
        "lhPitches": [
          "F#2",
          "F#3"
        ],
        "midi": [
          42,
          54,
          66,
          70,
          76
        ]
      },
      {
        "index": 3,
        "name": "Fmaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[=F=Ae]",
        "lhABC_whole": "[=F,,=F,]",
        "rhPitches": [
          "F4",
          "A4",
          "E5"
        ],
        "lhPitches": [
          "F2",
          "F3"
        ],
        "midi": [
          41,
          53,
          65,
          69,
          76
        ]
      },
      {
        "index": 4,
        "name": "E",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[EGBe]",
        "lhABC_whole": "[E,,E,]",
        "rhPitches": [
          "E4",
          "G#4",
          "B4",
          "E5"
        ],
        "lhPitches": [
          "E2",
          "E3"
        ],
        "midi": [
          40,
          52,
          64,
          68,
          71,
          76
        ]
      }
    ],
    "abc2Bar": "X:4\nT:4. A Major \u2192 E Major\nM:4/4\nL:1/4\nK:E\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"A\"[CEA] \"Em/G\"[=GBe] \"F#7\"[F^Ae] \"Fmaj7\"[=F=Ae] | \"E\"[EGBe]4 ||\n[V:LH] [A,,A,] [=G,,=G,] [F,,F,] [=F,,=F,] | [E,,E,]4 ||",
    "abc5Bar": "X:4\nT:4. A Major \u2192 E Major\nM:C\nL:1/1\nK:E\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"A\"[CEA] | \"Em/G\"[=GBe] | \"F#7\"[F^Ae] | \"Fmaj7\"[=F=Ae] | \"E\"[EGBe] ||\n[V:LH] [A,,A,] | [=G,,=G,] | [F,,F,] | [=F,,=F,] | [E,,E,] ||"
  },
  {
    "num": 5,
    "title": "5. E Major \u2192 B Major",
    "fromKey": "E Major",
    "toKey": "B Major",
    "targetKey": "B",
    "keySig": "B",
    "circleAngle": 150,
    "chords": [
      {
        "index": 0,
        "name": "E",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[GBe]",
        "lhABC_whole": "[E,E]",
        "rhPitches": [
          "G#4",
          "B4",
          "E5"
        ],
        "lhPitches": [
          "E3",
          "E4"
        ],
        "midi": [
          52,
          64,
          68,
          71,
          76
        ]
      },
      {
        "index": 1,
        "name": "Bm/D",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[=dfb]",
        "lhABC_whole": "[=D,=D]",
        "rhPitches": [
          "D5",
          "F#5",
          "B5"
        ],
        "lhPitches": [
          "D3",
          "D4"
        ],
        "midi": [
          50,
          62,
          74,
          78,
          83
        ]
      },
      {
        "index": 2,
        "name": "C#7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[c^eb]",
        "lhABC_whole": "[C,C]",
        "rhPitches": [
          "C#5",
          "E#5",
          "B5"
        ],
        "lhPitches": [
          "C#3",
          "C#4"
        ],
        "midi": [
          49,
          61,
          73,
          77,
          83
        ]
      },
      {
        "index": 3,
        "name": "Cmaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[=c=eb]",
        "lhABC_whole": "[=C,=C]",
        "rhPitches": [
          "C5",
          "E5",
          "B5"
        ],
        "lhPitches": [
          "C3",
          "C4"
        ],
        "midi": [
          48,
          60,
          72,
          76,
          83
        ]
      },
      {
        "index": 4,
        "name": "B",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[Bdfb]",
        "lhABC_whole": "[B,,B,]",
        "rhPitches": [
          "B4",
          "D#5",
          "F#5",
          "B5"
        ],
        "lhPitches": [
          "B2",
          "B3"
        ],
        "midi": [
          47,
          59,
          71,
          75,
          78,
          83
        ]
      }
    ],
    "abc2Bar": "X:5\nT:5. E Major \u2192 B Major\nM:4/4\nL:1/4\nK:B\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"E\"[GBe] \"Bm/D\"[=dfb] \"C#7\"[c^eb] \"Cmaj7\"[=c=eb] | \"B\"[Bdfb]4 ||\n[V:LH] [E,E] [=D,=D] [C,C] [=C,=C] | [B,,B,]4 ||",
    "abc5Bar": "X:5\nT:5. E Major \u2192 B Major\nM:C\nL:1/1\nK:B\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"E\"[GBe] | \"Bm/D\"[=dfb] | \"C#7\"[c^eb] | \"Cmaj7\"[=c=eb] | \"B\"[Bdfb] ||\n[V:LH] [E,E] | [=D,=D] | [C,C] | [=C,=C] | [B,,B,] ||"
  },
  {
    "num": 6,
    "title": "6. B Major \u2192 F# Major",
    "fromKey": "B Major",
    "toKey": "F# Major",
    "targetKey": "F#",
    "keySig": "F#",
    "circleAngle": 180,
    "chords": [
      {
        "index": 0,
        "name": "B",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[DFB]",
        "lhABC_whole": "[B,,B,]",
        "rhPitches": [
          "D#4",
          "F#4",
          "B4"
        ],
        "lhPitches": [
          "B2",
          "B3"
        ],
        "midi": [
          47,
          59,
          63,
          66,
          71
        ]
      },
      {
        "index": 1,
        "name": "F#m/A",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[=Acf]",
        "lhABC_whole": "[=A,,=A,]",
        "rhPitches": [
          "A4",
          "C#5",
          "F#5"
        ],
        "lhPitches": [
          "A2",
          "A3"
        ],
        "midi": [
          45,
          57,
          69,
          73,
          78
        ]
      },
      {
        "index": 2,
        "name": "G#7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[G^Bf]",
        "lhABC_whole": "[G,,G,]",
        "rhPitches": [
          "G#4",
          "B#4",
          "F#5"
        ],
        "lhPitches": [
          "G#2",
          "G#3"
        ],
        "midi": [
          44,
          56,
          68,
          72,
          78
        ]
      },
      {
        "index": 3,
        "name": "Gmaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[=G=Bf]",
        "lhABC_whole": "[=G,,=G,]",
        "rhPitches": [
          "G4",
          "B4",
          "F#5"
        ],
        "lhPitches": [
          "G2",
          "G3"
        ],
        "midi": [
          43,
          55,
          67,
          71,
          78
        ]
      },
      {
        "index": 4,
        "name": "F#",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[FAcf]",
        "lhABC_whole": "[F,,F,]",
        "rhPitches": [
          "F#4",
          "A#4",
          "C#5",
          "F#5"
        ],
        "lhPitches": [
          "F#2",
          "F#3"
        ],
        "midi": [
          42,
          54,
          66,
          70,
          73,
          78
        ]
      }
    ],
    "abc2Bar": "X:6\nT:6. B Major \u2192 F# Major\nM:4/4\nL:1/4\nK:F#\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"B\"[DFB] \"F#m/A\"[=Acf] \"G#7\"[G^Bf] \"Gmaj7\"[=G=Bf] | \"F#\"[FAcf]4 ||\n[V:LH] [B,,B,] [=A,,=A,] [G,,G,] [=G,,=G,] | [F,,F,]4 ||",
    "abc5Bar": "X:6\nT:6. B Major \u2192 F# Major\nM:C\nL:1/1\nK:F#\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"B\"[DFB] | \"F#m/A\"[=Acf] | \"G#7\"[G^Bf] | \"Gmaj7\"[=G=Bf] | \"F#\"[FAcf] ||\n[V:LH] [B,,B,] | [=A,,=A,] | [G,,G,] | [=G,,=G,] | [F,,F,] ||"
  },
  {
    "num": 7,
    "title": "7. F# Major (Gb) \u2192 Db Major (Enharmonic Pivot)",
    "fromKey": "F# Major (Gb)",
    "toKey": "Db Major",
    "targetKey": "Db",
    "keySig": "Db",
    "circleAngle": 210,
    "chords": [
      {
        "index": 0,
        "name": "Gb",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[B,DG]",
        "lhABC_whole": "[G,,G,]",
        "rhPitches": [
          "B-3",
          "D-4",
          "G-4"
        ],
        "lhPitches": [
          "G-2",
          "G-3"
        ],
        "midi": [
          42,
          54,
          58,
          61,
          66
        ]
      },
      {
        "index": 1,
        "name": "Dbm/Fb",
        "roman": "",
        "figuredBass": "",
        "rhABC_whole": "[_FAd]",
        "lhABC_whole": "[_F,,_F,]",
        "rhPitches": [
          "F-4",
          "A-4",
          "D-5"
        ],
        "lhPitches": [
          "F-2",
          "F-3"
        ],
        "midi": [
          40,
          52,
          64,
          68,
          73
        ]
      },
      {
        "index": 2,
        "name": "Eb7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[E=Gd]",
        "lhABC_whole": "[E,,E,]",
        "rhPitches": [
          "E-4",
          "G4",
          "D-5"
        ],
        "lhPitches": [
          "E-2",
          "E-3"
        ],
        "midi": [
          39,
          51,
          63,
          67,
          73
        ]
      },
      {
        "index": 3,
        "name": "Dmaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[=D_Gd]",
        "lhABC_whole": "[=D,,=D,]",
        "rhPitches": [
          "D4",
          "G-4",
          "D-5"
        ],
        "lhPitches": [
          "D2",
          "D3"
        ],
        "midi": [
          38,
          50,
          62,
          66,
          73
        ]
      },
      {
        "index": 4,
        "name": "Db",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[DFAd]",
        "lhABC_whole": "[D,,D,]",
        "rhPitches": [
          "D-4",
          "F4",
          "A-4",
          "D-5"
        ],
        "lhPitches": [
          "D-2",
          "D-3"
        ],
        "midi": [
          37,
          49,
          61,
          65,
          68,
          73
        ]
      }
    ],
    "abc2Bar": "X:7\nT:7. F# Major (Gb) \u2192 Db Major (Enharmonic Pivot)\nM:4/4\nL:1/4\nK:Db\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"Gb\"[B,DG] \"Dbm/Fb\"[_FAd] \"Eb7\"[E=Gd] \"Dmaj7\"[=D_Gd] | \"Db\"[DFAd]4 ||\n[V:LH] [G,,G,] [_F,,_F,] [E,,E,] [=D,,=D,] | [D,,D,]4 ||",
    "abc5Bar": "X:7\nT:7. F# Major (Gb) \u2192 Db Major (Enharmonic Pivot)\nM:C\nL:1/1\nK:Db\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"Gb\"[B,DG] | \"Dbm/Fb\"[_FAd] | \"Eb7\"[E=Gd] | \"Dmaj7\"[=D_Gd] | \"Db\"[DFAd] ||\n[V:LH] [G,,G,] | [_F,,_F,] | [E,,E,] | [=D,,=D,] | [D,,D,] ||"
  },
  {
    "num": 8,
    "title": "8. Db Major \u2192 Ab Major",
    "fromKey": "Db Major",
    "toKey": "Ab Major",
    "targetKey": "Ab",
    "keySig": "Ab",
    "circleAngle": 240,
    "chords": [
      {
        "index": 0,
        "name": "Db",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[FAd]",
        "lhABC_whole": "[D,D]",
        "rhPitches": [
          "F4",
          "A-4",
          "D-5"
        ],
        "lhPitches": [
          "D-3",
          "D-4"
        ],
        "midi": [
          49,
          61,
          65,
          68,
          73
        ]
      },
      {
        "index": 1,
        "name": "Abm/Cb",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[_cea]",
        "lhABC_whole": "[_C,_C]",
        "rhPitches": [
          "C-5",
          "E-5",
          "A-5"
        ],
        "lhPitches": [
          "C-3",
          "C-4"
        ],
        "midi": [
          47,
          59,
          71,
          75,
          80
        ]
      },
      {
        "index": 2,
        "name": "Bb7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[B=da]",
        "lhABC_whole": "[B,,B,]",
        "rhPitches": [
          "B-4",
          "D5",
          "A-5"
        ],
        "lhPitches": [
          "B-2",
          "B-3"
        ],
        "midi": [
          46,
          58,
          70,
          74,
          80
        ]
      },
      {
        "index": 3,
        "name": "Amaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[=Ada]",
        "lhABC_whole": "[=A,,=A,]",
        "rhPitches": [
          "A4",
          "D-5",
          "A-5"
        ],
        "lhPitches": [
          "A2",
          "A3"
        ],
        "midi": [
          45,
          57,
          69,
          73,
          80
        ]
      },
      {
        "index": 4,
        "name": "Ab",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[Acea]",
        "lhABC_whole": "[A,,A,]",
        "rhPitches": [
          "A-4",
          "C5",
          "E-5",
          "A-5"
        ],
        "lhPitches": [
          "A-2",
          "A-3"
        ],
        "midi": [
          44,
          56,
          68,
          72,
          75,
          80
        ]
      }
    ],
    "abc2Bar": "X:8\nT:8. Db Major \u2192 Ab Major\nM:4/4\nL:1/4\nK:Ab\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"Db\"[FAd] \"Abm/Cb\"[_cea] \"Bb7\"[B=da] \"Amaj7\"[=Ada] | \"Ab\"[Acea]4 ||\n[V:LH] [D,D] [_C,_C] [B,,B,] [=A,,=A,] | [A,,A,]4 ||",
    "abc5Bar": "X:8\nT:8. Db Major \u2192 Ab Major\nM:C\nL:1/1\nK:Ab\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"Db\"[FAd] | \"Abm/Cb\"[_cea] | \"Bb7\"[B=da] | \"Amaj7\"[=Ada] | \"Ab\"[Acea] ||\n[V:LH] [D,D] | [_C,_C] | [B,,B,] | [=A,,=A,] | [A,,A,] ||"
  },
  {
    "num": 9,
    "title": "9. Ab Major \u2192 Eb Major",
    "fromKey": "Ab Major",
    "toKey": "Eb Major",
    "targetKey": "Eb",
    "keySig": "Eb",
    "circleAngle": 270,
    "chords": [
      {
        "index": 0,
        "name": "Ab",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[CEA]",
        "lhABC_whole": "[A,,A,]",
        "rhPitches": [
          "C4",
          "E-4",
          "A-4"
        ],
        "lhPitches": [
          "A-2",
          "A-3"
        ],
        "midi": [
          44,
          56,
          60,
          63,
          68
        ]
      },
      {
        "index": 1,
        "name": "Ebm/Gb",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[_GBe]",
        "lhABC_whole": "[_G,,_G,]",
        "rhPitches": [
          "G-4",
          "B-4",
          "E-5"
        ],
        "lhPitches": [
          "G-2",
          "G-3"
        ],
        "midi": [
          42,
          54,
          66,
          70,
          75
        ]
      },
      {
        "index": 2,
        "name": "F7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[F=Ae]",
        "lhABC_whole": "[F,,F,]",
        "rhPitches": [
          "F4",
          "A4",
          "E-5"
        ],
        "lhPitches": [
          "F2",
          "F3"
        ],
        "midi": [
          41,
          53,
          65,
          69,
          75
        ]
      },
      {
        "index": 3,
        "name": "Emaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[=EAe]",
        "lhABC_whole": "[=E,,=E,]",
        "rhPitches": [
          "E4",
          "A-4",
          "E-5"
        ],
        "lhPitches": [
          "E2",
          "E3"
        ],
        "midi": [
          40,
          52,
          64,
          68,
          75
        ]
      },
      {
        "index": 4,
        "name": "Eb",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[EGBe]",
        "lhABC_whole": "[E,,E,]",
        "rhPitches": [
          "E-4",
          "G4",
          "B-4",
          "E-5"
        ],
        "lhPitches": [
          "E-2",
          "E-3"
        ],
        "midi": [
          39,
          51,
          63,
          67,
          70,
          75
        ]
      }
    ],
    "abc2Bar": "X:9\nT:9. Ab Major \u2192 Eb Major\nM:4/4\nL:1/4\nK:Eb\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"Ab\"[CEA] \"Ebm/Gb\"[_GBe] \"F7\"[F=Ae] \"Emaj7\"[=EAe] | \"Eb\"[EGBe]4 ||\n[V:LH] [A,,A,] [_G,,_G,] [F,,F,] [=E,,=E,] | [E,,E,]4 ||",
    "abc5Bar": "X:9\nT:9. Ab Major \u2192 Eb Major\nM:C\nL:1/1\nK:Eb\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"Ab\"[CEA] | \"Ebm/Gb\"[_GBe] | \"F7\"[F=Ae] | \"Emaj7\"[=EAe] | \"Eb\"[EGBe] ||\n[V:LH] [A,,A,] | [_G,,_G,] | [F,,F,] | [=E,,=E,] | [E,,E,] ||"
  },
  {
    "num": 10,
    "title": "10. Eb Major \u2192 Bb Major",
    "fromKey": "Eb Major",
    "toKey": "Bb Major",
    "targetKey": "Bb",
    "keySig": "Bb",
    "circleAngle": 300,
    "chords": [
      {
        "index": 0,
        "name": "Eb",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[GBe]",
        "lhABC_whole": "[E,E]",
        "rhPitches": [
          "G4",
          "B-4",
          "E-5"
        ],
        "lhPitches": [
          "E-3",
          "E-4"
        ],
        "midi": [
          51,
          63,
          67,
          70,
          75
        ]
      },
      {
        "index": 1,
        "name": "Bbm/Db",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[_dfb]",
        "lhABC_whole": "[_D,_D]",
        "rhPitches": [
          "D-5",
          "F5",
          "B-5"
        ],
        "lhPitches": [
          "D-3",
          "D-4"
        ],
        "midi": [
          49,
          61,
          73,
          77,
          82
        ]
      },
      {
        "index": 2,
        "name": "C7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[c=eb]",
        "lhABC_whole": "[C,C]",
        "rhPitches": [
          "C5",
          "E5",
          "B-5"
        ],
        "lhPitches": [
          "C3",
          "C4"
        ],
        "midi": [
          48,
          60,
          72,
          76,
          82
        ]
      },
      {
        "index": 3,
        "name": "Bmaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[=Beb]",
        "lhABC_whole": "[=B,,=B,]",
        "rhPitches": [
          "B4",
          "E-5",
          "B-5"
        ],
        "lhPitches": [
          "B2",
          "B3"
        ],
        "midi": [
          47,
          59,
          71,
          75,
          82
        ]
      },
      {
        "index": 4,
        "name": "Bb",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[Bdfb]",
        "lhABC_whole": "[B,,B,]",
        "rhPitches": [
          "B-4",
          "D5",
          "F5",
          "B-5"
        ],
        "lhPitches": [
          "B-2",
          "B-3"
        ],
        "midi": [
          46,
          58,
          70,
          74,
          77,
          82
        ]
      }
    ],
    "abc2Bar": "X:10\nT:10. Eb Major \u2192 Bb Major\nM:4/4\nL:1/4\nK:Bb\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"Eb\"[GBe] \"Bbm/Db\"[_dfb] \"C7\"[c=eb] \"Bmaj7\"[=Beb] | \"Bb\"[Bdfb]4 ||\n[V:LH] [E,E] [_D,_D] [C,C] [=B,,=B,] | [B,,B,]4 ||",
    "abc5Bar": "X:10\nT:10. Eb Major \u2192 Bb Major\nM:C\nL:1/1\nK:Bb\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"Eb\"[GBe] | \"Bbm/Db\"[_dfb] | \"C7\"[c=eb] | \"Bmaj7\"[=Beb] | \"Bb\"[Bdfb] ||\n[V:LH] [E,E] | [_D,_D] | [C,C] | [=B,,=B,] | [B,,B,] ||"
  },
  {
    "num": 11,
    "title": "11. Bb Major \u2192 F Major",
    "fromKey": "Bb Major",
    "toKey": "F Major",
    "targetKey": "F",
    "keySig": "F",
    "circleAngle": 330,
    "chords": [
      {
        "index": 0,
        "name": "Bb",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[DFB]",
        "lhABC_whole": "[B,,B,]",
        "rhPitches": [
          "D4",
          "F4",
          "B-4"
        ],
        "lhPitches": [
          "B-2",
          "B-3"
        ],
        "midi": [
          46,
          58,
          62,
          65,
          70
        ]
      },
      {
        "index": 1,
        "name": "Fm/Ab",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[_Acf]",
        "lhABC_whole": "[_A,,_A,]",
        "rhPitches": [
          "A-4",
          "C5",
          "F5"
        ],
        "lhPitches": [
          "A-2",
          "A-3"
        ],
        "midi": [
          44,
          56,
          68,
          72,
          77
        ]
      },
      {
        "index": 2,
        "name": "G7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[G=Bf]",
        "lhABC_whole": "[G,,G,]",
        "rhPitches": [
          "G4",
          "B4",
          "F5"
        ],
        "lhPitches": [
          "G2",
          "G3"
        ],
        "midi": [
          43,
          55,
          67,
          71,
          77
        ]
      },
      {
        "index": 3,
        "name": "Gbmaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[_GBf]",
        "lhABC_whole": "[_G,,_G,]",
        "rhPitches": [
          "G-4",
          "B-4",
          "F5"
        ],
        "lhPitches": [
          "G-2",
          "G-3"
        ],
        "midi": [
          42,
          54,
          66,
          70,
          77
        ]
      },
      {
        "index": 4,
        "name": "F",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[FAcf]",
        "lhABC_whole": "[F,,F,]",
        "rhPitches": [
          "F4",
          "A4",
          "C5",
          "F5"
        ],
        "lhPitches": [
          "F2",
          "F3"
        ],
        "midi": [
          41,
          53,
          65,
          69,
          72,
          77
        ]
      }
    ],
    "abc2Bar": "X:11\nT:11. Bb Major \u2192 F Major\nM:4/4\nL:1/4\nK:F\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"Bb\"[DFB] \"Fm/Ab\"[_Acf] \"G7\"[G=Bf] \"Gbmaj7\"[_GBf] | \"F\"[FAcf]4 ||\n[V:LH] [B,,B,] [_A,,_A,] [G,,G,] [_G,,_G,] | [F,,F,]4 ||",
    "abc5Bar": "X:11\nT:11. Bb Major \u2192 F Major\nM:C\nL:1/1\nK:F\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"Bb\"[DFB] | \"Fm/Ab\"[_Acf] | \"G7\"[G=Bf] | \"Gbmaj7\"[_GBf] | \"F\"[FAcf] ||\n[V:LH] [B,,B,] | [_A,,_A,] | [G,,G,] | [_G,,_G,] | [F,,F,] ||"
  },
  {
    "num": 12,
    "title": "12. F Major \u2192 C Major (Completing the Circle)",
    "fromKey": "F Major",
    "toKey": "C Major",
    "targetKey": "C",
    "keySig": "C",
    "circleAngle": 0,
    "chords": [
      {
        "index": 0,
        "name": "F",
        "roman": "IV",
        "figuredBass": "5/3",
        "rhABC_whole": "[A,CF]",
        "lhABC_whole": "[F,,F,]",
        "rhPitches": [
          "A3",
          "C4",
          "F4"
        ],
        "lhPitches": [
          "F2",
          "F3"
        ],
        "midi": [
          41,
          53,
          57,
          60,
          65
        ]
      },
      {
        "index": 1,
        "name": "Cm/Eb",
        "roman": "i6",
        "figuredBass": "6/3",
        "rhABC_whole": "[_EGc]",
        "lhABC_whole": "[_E,,_E,]",
        "rhPitches": [
          "E-4",
          "G4",
          "C5"
        ],
        "lhPitches": [
          "E-2",
          "E-3"
        ],
        "midi": [
          39,
          51,
          63,
          67,
          72
        ]
      },
      {
        "index": 2,
        "name": "D7",
        "roman": "V7/V",
        "figuredBass": "7",
        "rhABC_whole": "[D^Fc]",
        "lhABC_whole": "[D,,D,]",
        "rhPitches": [
          "D4",
          "F#4",
          "C5"
        ],
        "lhPitches": [
          "D2",
          "D3"
        ],
        "midi": [
          38,
          50,
          62,
          66,
          72
        ]
      },
      {
        "index": 3,
        "name": "Dbmaj7",
        "roman": "bIImaj7",
        "figuredBass": "7",
        "rhABC_whole": "[_DFc]",
        "lhABC_whole": "[_D,,_D,]",
        "rhPitches": [
          "D-4",
          "F4",
          "C5"
        ],
        "lhPitches": [
          "D-2",
          "D-3"
        ],
        "midi": [
          37,
          49,
          61,
          65,
          72
        ]
      },
      {
        "index": 4,
        "name": "C",
        "roman": "I",
        "figuredBass": "5/3",
        "rhABC_whole": "[CEGc]",
        "lhABC_whole": "[C,,C,]",
        "rhPitches": [
          "C4",
          "E4",
          "G4",
          "C5"
        ],
        "lhPitches": [
          "C2",
          "C3"
        ],
        "midi": [
          36,
          48,
          60,
          64,
          67,
          72
        ]
      }
    ],
    "abc2Bar": "X:12\nT:12. F Major \u2192 C Major (Completing the Circle)\nM:4/4\nL:1/4\nK:C\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"F\"[A,CF] \"Cm/Eb\"[_EGc] \"D7\"[D^Fc] \"Dbmaj7\"[_DFc] | \"C\"[CEGc]4 ||\n[V:LH] [F,,F,] [_E,,_E,] [D,,D,] [_D,,_D,] | [C,,C,]4 ||",
    "abc5Bar": "X:12\nT:12. F Major \u2192 C Major (Completing the Circle)\nM:C\nL:1/1\nK:C\n%%score ( RH ) | ( LH )\nV:RH clef=treble\nV:LH clef=bass\n[V:RH] \"F\"[A,CF] | \"Cm/Eb\"[_EGc] | \"D7\"[D^Fc] | \"Dbmaj7\"[_DFc] | \"C\"[CEGc] ||\n[V:LH] [F,,F,] | [_E,,_E,] | [D,,D,] | [_D,,_D,] | [C,,C,] ||"
  }
];

if (typeof window !== 'undefined') window.CIRCLE_MODULATIONS_DATA = CIRCLE_MODULATIONS_DATA;
if (typeof module !== 'undefined') module.exports = CIRCLE_MODULATIONS_DATA;
