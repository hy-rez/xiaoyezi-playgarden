import type {Lesson} from '../../types';
export default {
  "kind": "interactive",
  "quizSize": 6,
  "library": {
    "label": "四季天气",
    "groups": [
      {
        "title": "认识四季",
        "fromIndex": 0,
        "toIndex": 4
      },
      {
        "title": "认识天气",
        "fromIndex": 4,
        "toIndex": 10
      }
    ]
  },
  "pages": [
    {
      "title": "春天",
      "text": "这幅春天的图里，树枝长出了嫩芽，地上开出了小花。不同地方的春天，景色也会不一样。",
      "art": "season-0",
      "audio": "weather-intro-0"
    },
    {
      "title": "夏天",
      "text": "这幅夏天的图里，树叶绿绿的，阳光照在草地上。有些地方的夏天比较热。",
      "art": "season-1",
      "audio": "weather-intro-1"
    },
    {
      "title": "秋天",
      "text": "这幅秋天的图里，一些树叶变成了黄色和红色，还有叶子飘下来。",
      "art": "season-2",
      "audio": "weather-intro-2"
    },
    {
      "title": "冬天",
      "text": "这幅冬天的图里，树枝上的叶子少了，地上有白白的雪。不是所有地方的冬天都会下雪。",
      "art": "season-3",
      "audio": "weather-intro-3"
    },
    {
      "title": "晴天",
      "text": "晴天时，图里的太阳照着草地，天空比较明亮。认识太阳时，我们看图片，不直视太阳。",
      "art": "weather-0",
      "audio": "weather-intro-4"
    },
    {
      "title": "多云",
      "text": "多云时，天空里有比较多的云。有云不一定就会下雨。",
      "art": "weather-1",
      "audio": "weather-intro-5"
    },
    {
      "title": "下雨",
      "text": "下雨时，小雨滴从云里落下来。图里的草地和小路湿湿的。",
      "art": "weather-2",
      "audio": "weather-intro-6"
    },
    {
      "title": "下雪",
      "text": "下雪时，白白的雪花落下来，地上慢慢积起一层雪。",
      "art": "weather-3",
      "audio": "weather-intro-7"
    },
    {
      "title": "刮风",
      "text": "刮风时，树枝和叶子会随着风摆动。图里的叶子被风吹起来了。",
      "art": "weather-4",
      "audio": "weather-intro-8"
    },
    {
      "title": "有雾",
      "text": "有雾时，图里的远处像隔着一层薄薄的白纱，看起来不太清楚。",
      "art": "weather-5",
      "audio": "weather-intro-9"
    }
  ],
  "questions": [
    {
      "prompt": "哪张图画的是春天？",
      "audio": "weather-q-0-0",
      "options": [
        {
          "label": "四季图",
          "art": "season-0"
        },
        {
          "label": "四季图",
          "art": "season-1"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "春天下雨了，出门带什么可以帮助挡雨？",
      "audio": "weather-q-0-1",
      "options": [
        {
          "label": "时钟",
          "art": "daily-9"
        },
        {
          "label": "雨伞",
          "art": "daily-6"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "哪张图画的是夏天？",
      "audio": "weather-q-1-0",
      "options": [
        {
          "label": "四季图",
          "art": "season-2"
        },
        {
          "label": "四季图",
          "art": "season-1"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "夏天这一天很热，出门带什么方便喝水？",
      "audio": "weather-q-1-1",
      "options": [
        {
          "label": "水壶",
          "art": "daily-7"
        },
        {
          "label": "牙膏",
          "art": "daily-1"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "哪张图画的是秋天？",
      "audio": "weather-q-2-0",
      "options": [
        {
          "label": "四季图",
          "art": "season-2"
        },
        {
          "label": "四季图",
          "art": "season-3"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "秋天这一天有点冷，哪样衣物可以围在脖子上保暖？",
      "audio": "weather-q-2-1",
      "options": [
        {
          "label": "盘子",
          "art": "sorting-item-5-2"
        },
        {
          "label": "围巾",
          "art": "sorting-item-3-5"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "哪张图画的是冬天？",
      "audio": "weather-q-3-0",
      "options": [
        {
          "label": "四季图",
          "art": "season-0"
        },
        {
          "label": "四季图",
          "art": "season-3"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "冬天外面很冷，穿哪件衣服更暖和？",
      "audio": "weather-q-3-1",
      "options": [
        {
          "label": "厚外套",
          "art": "gear-coat"
        },
        {
          "label": "短裤",
          "art": "gear-shorts"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "哪张图画的是晴天？",
      "audio": "weather-q-4-0",
      "options": [
        {
          "label": "天气图",
          "art": "weather-0"
        },
        {
          "label": "天气图",
          "art": "weather-1"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "晴天出门，哪样物品可以帮助头部遮阳？",
      "audio": "weather-q-4-1",
      "options": [
        {
          "label": "勺子",
          "art": "sorting-item-5-3"
        },
        {
          "label": "帽子",
          "art": "sorting-item-3-0"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "哪张图画的是多云？",
      "audio": "weather-q-5-0",
      "options": [
        {
          "label": "天气图",
          "art": "weather-2"
        },
        {
          "label": "天气图",
          "art": "weather-1"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "哪张图的天空里有很多云，没有下雨？",
      "audio": "weather-q-5-1",
      "options": [
        {
          "label": "天气图",
          "art": "weather-1"
        },
        {
          "label": "天气图",
          "art": "weather-2"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "哪张图画的是下雨？",
      "audio": "weather-q-6-0",
      "options": [
        {
          "label": "天气图",
          "art": "weather-2"
        },
        {
          "label": "天气图",
          "art": "weather-3"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "下雨出门，带哪样物品可以帮助挡雨？",
      "audio": "weather-q-6-1",
      "options": [
        {
          "label": "梳子",
          "art": "daily-3"
        },
        {
          "label": "雨伞",
          "art": "daily-6"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "哪张图画的是下雪？",
      "audio": "weather-q-7-0",
      "options": [
        {
          "label": "天气图",
          "art": "weather-4"
        },
        {
          "label": "天气图",
          "art": "weather-3"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "下雪了，外面很冷，出门穿哪件衣服更暖和？",
      "audio": "weather-q-7-1",
      "options": [
        {
          "label": "厚外套",
          "art": "gear-coat"
        },
        {
          "label": "短裤",
          "art": "gear-shorts"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "哪张图画的是刮风？",
      "audio": "weather-q-8-0",
      "options": [
        {
          "label": "天气图",
          "art": "weather-4"
        },
        {
          "label": "天气图",
          "art": "weather-5"
        }
      ],
      "answer": 0
    },
    {
      "prompt": "哪张图里的树枝和叶子正随着风摆动？",
      "audio": "weather-q-8-1",
      "options": [
        {
          "label": "天气图",
          "art": "weather-5"
        },
        {
          "label": "天气图",
          "art": "weather-4"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "哪张图画的是有雾？",
      "audio": "weather-q-9-0",
      "options": [
        {
          "label": "天气图",
          "art": "weather-0"
        },
        {
          "label": "天气图",
          "art": "weather-5"
        }
      ],
      "answer": 1
    },
    {
      "prompt": "哪张图的远处像隔着一层白纱，看起来不清楚？",
      "audio": "weather-q-9-1",
      "options": [
        {
          "label": "天气图",
          "art": "weather-5"
        },
        {
          "label": "天气图",
          "art": "weather-0"
        }
      ],
      "answer": 0
    }
  ],
  "sticker": "weather-cover"
} satisfies Lesson;
