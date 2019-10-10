import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppServices } from './services/app.services';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'unsplashtest';
  public arrImages: Array<any>;
  public arrFavImages: Array<any>;
  public images = {
    "success": true,
    "photos": [
      {
        "id": "aw3OYvmphEQ",
        "create_at": "2019-09-23T03:54:25-04:00",
        "width": 5760,
        "height": 3840,
        "color": "#FB2C28",
        "description": "OUR PLANTE IS GETTING HOTTER THAN COLE SPROUSE. Global climate change strike - No Planet B - 09-20-2019",
        "liked_by_user": false,
        "alt": "out planet is getting hotter than Cole Sprouse banner",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569225070969-d29e804244a0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569225070969-d29e804244a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 23,
        "user": "markusspiske"
      },
      {
        "id": "zk1bHzIM9I8",
        "create_at": "2019-09-23T02:19:51-04:00",
        "width": 2701,
        "height": 4802,
        "color": "#FAFCFE",
        "description": "when it rains, it pours.",
        "liked_by_user": false,
        "alt": "person walking on road near buildings during day",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569219583319-0da06c6f2fb1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569219583319-0da06c6f2fb1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 87,
        "user": "ionsthegoat"
      },
      {
        "id": "qVOPoogpINM",
        "create_at": "2019-09-11T02:53:53-04:00",
        "width": 4687,
        "height": 3346,
        "color": "#EDF9FE",
        "description": "Face Winter With A Smile ",
        "liked_by_user": false,
        "alt": "assorted mannequins and dolls",
        "urls": {
          "full": "https://images.unsplash.com/photo-1568184765125-1de6d7acc746?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1568184765125-1de6d7acc746?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 11,
        "user": "max_williams"
      },
      {
        "id": "HCKPZdKaFgA",
        "create_at": "2019-10-01T16:23:48-04:00",
        "width": 4000,
        "height": 6000,
        "color": "#FEFEFE",
        "description": null,
        "liked_by_user": false,
        "alt": "red petaled flowers",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569961420374-799df64e4de8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569961420374-799df64e4de8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 71,
        "user": "romanivna13"
      },
      {
        "id": "IPcNOfiQJ5M",
        "create_at": "2019-09-29T22:45:59-04:00",
        "width": 3890,
        "height": 5034,
        "color": "#0A0E14",
        "description": "Mountain is calling",
        "liked_by_user": false,
        "alt": "brown mountains",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569811360606-50524fbb1638?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569811360606-50524fbb1638?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 159,
        "user": "coziestone"
      },
      {
        "id": "vhGtmMhpieQ",
        "create_at": "2019-09-22T11:35:32-04:00",
        "width": 6000,
        "height": 4000,
        "color": "#FCA92C",
        "description": "Vintage Volkswagen transport in green area in Berlin",
        "liked_by_user": false,
        "alt": "yellow and white Volkswagen Samba",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569165438361-cdb4403df55d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569165438361-cdb4403df55d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 54,
        "user": "fellowferdi"
      },
      {
        "id": "V0F7RoP1kZA",
        "create_at": "2019-09-12T16:22:45-04:00",
        "width": 4608,
        "height": 3456,
        "color": "#C6D0CC",
        "description": null,
        "liked_by_user": false,
        "alt": "ocean waves",
        "urls": {
          "full": "https://images.unsplash.com/photo-1568319748615-ba3551964eab?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1568319748615-ba3551964eab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 23,
        "user": "jannerboy62"
      },
      {
        "id": "aSIQAUaSQ6Y",
        "create_at": "2019-09-18T02:05:37-04:00",
        "width": 2832,
        "height": 4240,
        "color": "#FCD39E",
        "description": null,
        "liked_by_user": false,
        "alt": null,
        "urls": {
          "full": "https://images.unsplash.com/photo-1568786685515-82fc211cea51?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1568786685515-82fc211cea51?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 62,
        "user": "kevinwolf"
      },
      {
        "id": "Gsg3bLLFzUI",
        "create_at": "2019-09-17T11:31:31-04:00",
        "width": 5760,
        "height": 3840,
        "color": "#E6E6E5",
        "description": null,
        "liked_by_user": false,
        "alt": "selective-focus photograph of in blue top",
        "urls": {
          "full": "https://images.unsplash.com/photo-1568734002677-d66521c80bbf?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1568734002677-d66521c80bbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 37,
        "user": "gift_habeshaw"
      },
      {
        "id": "XO7gpPpFlqY",
        "create_at": "2019-09-22T03:05:24-04:00",
        "width": 4000,
        "height": 6000,
        "color": "#E8D5C9",
        "description": "© pixelperfektion – thank you, for crediting and supporting us! Peacefull Königssee in the wintertime from the boat",
        "liked_by_user": false,
        "alt": null,
        "urls": {
          "full": "https://images.unsplash.com/photo-1569135579453-8a1d7ae63e14?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569135579453-8a1d7ae63e14?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 95,
        "user": "pixelperfektion"
      },
      {
        "id": "t2JTRDrp6YM",
        "create_at": "2019-09-22T17:03:39-04:00",
        "width": 7952,
        "height": 5304,
        "color": "#B5C2CC",
        "description": null,
        "liked_by_user": false,
        "alt": "yellow door",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569185436544-e9db19201b65?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569185436544-e9db19201b65?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 16,
        "user": "purzlbaum"
      },
      {
        "id": "BRpjU0FKnzc",
        "create_at": "2019-09-30T21:12:25-04:00",
        "width": 2432,
        "height": 3648,
        "color": "#E2DCDF",
        "description": null,
        "liked_by_user": false,
        "alt": null,
        "urls": {
          "full": "https://images.unsplash.com/photo-1569892146832-86f25e4cc1b1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569892146832-86f25e4cc1b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 53,
        "user": "taylorgsimpson"
      },
      {
        "id": "JxAyvEdP-0g",
        "create_at": "2019-09-23T16:48:41-04:00",
        "width": 6720,
        "height": 4480,
        "color": "#FDFAFF",
        "description": null,
        "liked_by_user": false,
        "alt": "woman holding black camera stick",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569271715000-883eda0e14f6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569271715000-883eda0e14f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 25,
        "user": "andre_furtado"
      },
      {
        "id": "VZg1ATFwJBc",
        "create_at": "2019-09-09T11:10:10-04:00",
        "width": 2432,
        "height": 3648,
        "color": "#1D2222",
        "description": null,
        "liked_by_user": false,
        "alt": "sea beside rock formation",
        "urls": {
          "full": "https://images.unsplash.com/photo-1568041773635-4a59488029b2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1568041773635-4a59488029b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 158,
        "user": "kylefrederick10"
      },
      {
        "id": "Yfh6ghsDRdk",
        "create_at": "2019-10-08T04:11:05-04:00",
        "width": 7952,
        "height": 5304,
        "color": "#C0C1BF",
        "description": null,
        "liked_by_user": false,
        "alt": "white painted wall with illustration of face wearing glasses",
        "urls": {
          "full": "https://images.unsplash.com/photo-1570522243538-c443becc1b28?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1570522243538-c443becc1b28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 10,
        "user": "purzlbaum"
      },
      {
        "id": "00I24QHG19E",
        "create_at": "2019-09-22T02:54:00-04:00",
        "width": 5184,
        "height": 3456,
        "color": "#FFFFFF",
        "description": null,
        "liked_by_user": false,
        "alt": null,
        "urls": {
          "full": "https://images.unsplash.com/photo-1569135228124-3c7be899f750?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569135228124-3c7be899f750?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 57,
        "user": "singahati"
      },
      {
        "id": "HJiTgAvzVt0",
        "create_at": "2019-10-06T13:08:36-04:00",
        "width": 5261,
        "height": 7191,
        "color": "#E4E7E8",
        "description": null,
        "liked_by_user": false,
        "alt": "girl standing beside Christmas tree inside living room",
        "urls": {
          "full": "https://images.unsplash.com/photo-1570381693793-a2433fd69751?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1570381693793-a2433fd69751?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 28,
        "user": "tonywang7"
      },
      {
        "id": "Uz3fEI1TuMM",
        "create_at": "2019-09-14T21:52:53-04:00",
        "width": 3882,
        "height": 5823,
        "color": "#DED8DA",
        "description": null,
        "liked_by_user": false,
        "alt": "grey cat on grey surface",
        "urls": {
          "full": "https://images.unsplash.com/photo-1568512306864-a81b71067aab?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1568512306864-a81b71067aab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 27,
        "user": "runblue"
      },
      {
        "id": "_b1BFtvb8Qs",
        "create_at": "2019-10-05T23:58:43-04:00",
        "width": 2369,
        "height": 3554,
        "color": "#F5C39A",
        "description": null,
        "liked_by_user": false,
        "alt": "gray clouds",
        "urls": {
          "full": "https://images.unsplash.com/photo-1570334030272-9fb8b2bf259d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1570334030272-9fb8b2bf259d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 84,
        "user": "jaron_mobley"
      },
      {
        "id": "eSsxTIX_AqU",
        "create_at": "2019-09-25T16:52:42-04:00",
        "width": 4480,
        "height": 6720,
        "color": "#110B08",
        "description": null,
        "liked_by_user": false,
        "alt": "man sitting on ledge",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569444743379-0db6f92c314f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569444743379-0db6f92c314f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 13,
        "user": "inlieuandinview"
      },
      {
        "id": "xptcTBpta-w",
        "create_at": "2019-10-03T16:11:05-04:00",
        "width": 3456,
        "height": 5184,
        "color": "#191814",
        "description": "The famous Golden Gate hidding behing Karl, the San Francisco fog.",
        "liked_by_user": false,
        "alt": "Golden Gate Bridge, San Francisco during daytime",
        "urls": {
          "full": "https://images.unsplash.com/photo-1570133103227-96458ed32d7a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1570133103227-96458ed32d7a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 115,
        "user": "wdtrends"
      },
      {
        "id": "xpnGM0Yy8LY",
        "create_at": "2019-10-03T20:57:27-04:00",
        "width": 3037,
        "height": 2432,
        "color": "#140F0D",
        "description": null,
        "liked_by_user": false,
        "alt": "woman standing facing on rock formation during daytime",
        "urls": {
          "full": "https://images.unsplash.com/photo-1570149999748-524b3c4078ff?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1570149999748-524b3c4078ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 10,
        "user": "taylorgsimpson"
      },
      {
        "id": "puW9Q_Pvsfs",
        "create_at": "2019-10-07T03:26:14-04:00",
        "width": 2669,
        "height": 4000,
        "color": "#FEC557",
        "description": null,
        "liked_by_user": false,
        "alt": "woman crossing in pedestrian lane",
        "urls": {
          "full": "https://images.unsplash.com/photo-1570433163749-d37d3937c8ec?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1570433163749-d37d3937c8ec?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 35,
        "user": "tonywang7"
      },
      {
        "id": "2cU7jvnjYhk",
        "create_at": "2019-09-24T01:53:00-04:00",
        "width": 4032,
        "height": 3024,
        "color": "#E9E0FE",
        "description": null,
        "liked_by_user": false,
        "alt": "pink sea creature",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569304374951-de3d34f108c5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569304374951-de3d34f108c5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 47,
        "user": "megajacobf"
      },
      {
        "id": "wNGPoWonOgQ",
        "create_at": "2019-09-20T00:53:54-04:00",
        "width": 4219,
        "height": 2813,
        "color": "#FAFAF8",
        "description": "Park Lage - Rio de Janeiro - Brazil\n",
        "liked_by_user": false,
        "alt": null,
        "urls": {
          "full": "https://images.unsplash.com/photo-1568954957592-f3917e21b697?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1568954957592-f3917e21b697?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 16,
        "user": "jacksondavid"
      },
      {
        "id": "QRzXAi1xo-k",
        "create_at": "2019-10-06T06:02:15-04:00",
        "width": 7952,
        "height": 5304,
        "color": "#FDFDFB",
        "description": null,
        "liked_by_user": false,
        "alt": "jumping woman beside train",
        "urls": {
          "full": "https://images.unsplash.com/photo-1570356102975-89f16b248ec9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1570356102975-89f16b248ec9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 30,
        "user": "tonywang7"
      },
      {
        "id": "u05qRRJP8KY",
        "create_at": "2019-09-30T13:21:56-04:00",
        "width": 4000,
        "height": 5000,
        "color": "#CAC8CB",
        "description": "Gelato is life! ",
        "liked_by_user": false,
        "alt": "ice cream photography",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569863608454-dce3c50de2d1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569863608454-dce3c50de2d1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 44,
        "user": "alphapixelstm"
      },
      {
        "id": "AR8XAYZVB7Q",
        "create_at": "2019-09-26T13:36:50-04:00",
        "width": 4672,
        "height": 2625,
        "color": "#E5E0F1",
        "description": null,
        "liked_by_user": false,
        "alt": "aerial view of buildings",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569519405700-a44e863bdce4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569519405700-a44e863bdce4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 98,
        "user": "jason_xj"
      },
      {
        "id": "FwHY3YWoQ9k",
        "create_at": "2019-10-07T16:25:41-04:00",
        "width": 3000,
        "height": 2000,
        "color": "#F4F8F8",
        "description": null,
        "liked_by_user": false,
        "alt": null,
        "urls": {
          "full": "https://images.unsplash.com/photo-1570479912222-cc59d7796234?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1570479912222-cc59d7796234?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 28,
        "user": "5tep5"
      },
      {
        "id": "b7epb_3OV4w",
        "create_at": "2019-09-21T02:17:11-04:00",
        "width": 2823,
        "height": 3529,
        "color": "#D7DFE3",
        "description": null,
        "liked_by_user": false,
        "alt": "different goods displayed in market inside white building",
        "urls": {
          "full": "https://images.unsplash.com/photo-1569046612014-36c485d949d9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk1MTY2fQ",
          "regular": "https://images.unsplash.com/photo-1569046612014-36c485d949d9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk1MTY2fQ"
        },
        "likes": 19,
        "user": "jaydensimm"
      }
    ]
  }

  public searchText: string = '';
  public searching: boolean = true;
  constructor(
    private appServices: AppServices
  ) {

  }

  ngOnInit() {
    this.loadRandomImages();
    this.loadFavsImages()
  }

  loadRandomImages() {
    this.appServices.randomImages()
      .subscribe(res => {
        if (res.success) {
          this.arrImages = res.photos;
        } else {
          alert('No se pudo cargar las imagenes')
        }
      }, () => {
        this.searching = false
      }, () => {
        this.searching = false
      })

  }

  loadFavsImages() {
    this.appServices.favImages()
      .subscribe(res => {
        if (res.success) {
          this.arrFavImages = res.photos;
        }
      })
  }

  likeImage(image) {
    if (image.is_requesting)
      return;

    image.liked_by_user = true;
    image.likes++;
    image.is_requesting = true;
    this.appServices
      .likeImage(image.id)
      .subscribe(res => {
        if (res.success) {
          alert('OK')
          let existe = this.arrFavImages.find(img => img.id === image.id);
          if (!existe) {
            this.arrFavImages.push(image)
          }
        } else {
          image.likes--;
          image.liked_by_user = false;
          image.is_requesting = false;
          alert(res.message)
        }
      }, () => {
        alert('No se pudo dar me gusta')
        image.liked_by_user = false;
        image.likes--;
        image.is_requesting = false;
      }, () => {
        image.is_requesting = false;
      })
  }
  unlikeImage(image) {
    if (image.is_requesting)
      return;

    image.liked_by_user = false;
    image.likes--;
    image.is_requesting = true;
    this.appServices
      .unlikeImage(image.id)
      .subscribe(res => {
        if (res.success) {
          alert('OK')
          this.arrFavImages.forEach((img, index) => {
            if (img.id === image.id) {
              this.arrFavImages.splice(index, 1)
            }
          })
        } else {
          image.likes++;
          image.liked_by_user = true;
          image.is_requesting = false;
          alert(res.message)
        }
      }, () => {
        alert('No se pudo quitar de favoritos')
        image.liked_by_user = true;
        image.likes++;
        image.is_requesting = false;
      }, () => {
        image.is_requesting = false;
      })
  }

  buscarImagenes() {
    console.log('Text ', this.searchText)
    if (!this.searchText) return;

    this.searching = true;
    this.appServices.findImages(this.searchText)
      .subscribe(res => {
        if (res.success) {
          this.arrImages = res.photos
        } else {
          this.searching = false;
          alert(res.message)
        }
      }, () => {
        this.searching = false;
        alert('No se pudo consultar')
      }, () => {

        this.searching = false;
      });

  }


}
