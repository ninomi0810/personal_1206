<script>
// import { mapState, mapActions } from 'pinia'
import { ref } from 'vue';
import { computed } from 'vue';
export default {
  data() {
    return {
      prism: null,
      current: {},
      index: 0, // 曲目index，從 songs 第一首開始
      isPlaying: false,
      songs: [
        {
          title: 'Love so sweet',
          artist: 'Arashi',
          audio: new Audio('public/生遊戯.mp3'),
          src: null
        },
        {
          title: 'Cream',
          artist: 'Sexy Zone',
          audio: new Audio('public/人生遊戯.mp3'),
          src: null
        },
        {
          title: 'Melty Bitter',
          artist: 'さとうもか',
          audio: new Audio('public/melt bitter.mp3'),
          src: null
        },
        {
          title: 'スノードーム',
          artist: 'ユイカ',
          audio: new Audio('public/スノードーム.mp3'),
          src: null
        },
        {
          title: 'ホンメイ',
          artist: 'Neo',
          audio: new Audio('public/ホンメイ.mp3'),
          src: null
        },
        {
          title: 'フライデー・ナイト',
          artist: 'なとり ',
          audio: new Audio('public/フライデーナイト.mp3'),
          src: null
        },
        {
          title: 'Love so sweet',
          artist: 'Arashi',
          audio: new Audio('public/Lovesosweet.mp3'),
          src: null
        },
      ],
      player: new Audio(),
      orange: false,
    }
  },
  methods: {
    showSignup() {
      // const prism = document.querySelector(".rec-prism")
      this.current.audio.pause();
      this.prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
    },
    showLogin() {
      this.current.audio.pause();
      this.prism.style.transform = "translateZ(-100px)";
    },
    showForgotPassword() {
      this.current.audio.pause();
      this.prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
    },
    showSubscribe() {
      this.current.audio.pause();
      this.prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
    },
    showContactUs() {
      this.current.audio.pause();
      this.prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
    },
    showThankYou() {
      this.current.audio.pause();
      this.prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
    },
    play2() {
      this.current.audio.play();
      if (!this.isPlaying) {
        this.current.audio.play();
        this.isPlaying = !this.isPlaying;
      }
      this.player.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }
        this.current = this.songs[this.index];
        this.current.audio.play();
        console.log("fin")
      }.bind(this));
    },
    play(song) {
      this.current.audio.play();
      if (!this.isPlaying) {
        this.current.audio.play();
        this.isPlaying = !this.isPlaying;
      }
      if (typeof song.src != "undefined") {
        this.current = song;
        console.log(this.current)
        this.player.src = this.current.src;
      }
      this.player.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }
        this.current = this.songs[this.index];
        this.current.audio.play();
        console.log("fin")
      }.bind(this));

      if (this.current.title == 'Love so sweet') {
        this.songs[1].audio.pause();
        this.songs[2].audio.pause();
        this.songs[3].audio.pause();
        this.songs[4].audio.pause();
        this.songs[5].audio.pause();
        this.songs[6].audio.currentTime = 0
        this.songs[6].audio.play();
        this.index = 6;
        img.src = "../../arashi.jpg"
      }
      if (this.current.title == 'Cream') {
        this.songs[6].audio.pause();
        this.songs[2].audio.pause();
        this.songs[3].audio.pause();
        this.songs[4].audio.pause();
        this.songs[5].audio.pause();
        this.current.audio.currentTime = 0
        this.songs[1].audio.play();
        console.log(this.songs[1])
        this.index = 1;
        img.src = "../../sexyzone.jpg"
      }
      if (this.current.title == 'Melty Bitter') {
        this.songs[6].audio.pause();
        this.songs[1].audio.pause();
        this.songs[3].audio.pause();
        this.songs[4].audio.pause();
        this.songs[5].audio.pause();
        this.current.audio.currentTime = 0
        this.songs[2].audio.play();
        console.log(this.songs[2])
        this.index = 2;
        img.src = "../../meltybitter.jpg"
      }
      if (this.current.title == 'スノードーム') {
        this.songs[6].audio.pause();
        this.songs[2].audio.pause();
        this.songs[1].audio.pause();
        this.songs[4].audio.pause();
        this.songs[5].audio.pause();
        this.current.audio.currentTime = 0
        this.songs[3].audio.play();
        this.index = 3;
        img.src = "../../snow.jpg"
      }
      if (this.current.title == 'ホンメイ') {
        this.songs[6].audio.pause();
        this.songs[2].audio.pause();
        this.songs[3].audio.pause();
        this.songs[1].audio.pause();
        this.songs[5].audio.pause();
        this.current.audio.currentTime = 0
        this.songs[4].audio.play();
        console.log(this.songs[4])
        this.index = 4;
        img.src = "../../neo.jpg"
      }
      if (this.current.title == 'フライデー・ナイト') {
        this.songs[6].audio.pause();
        this.songs[2].audio.pause();
        this.songs[3].audio.pause();
        this.songs[4].audio.pause();
        this.songs[1].audio.pause();
        this.current.audio.currentTime = 0
        this.songs[5].audio.play();
        console.log(this.songs[5])
        this.index = 5;
        img.src = "../../friday.jpg"
      }
    },
    pause() {
      this.current.audio.pause();
      this.isPlaying = false;
    },
    next() {
      this.isPlaying = true;
      console.dir(this.player)
      console.log(this.player)
      this.current.audio.pause();
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.current.audio.currentTime = 0
      this.current.audio.play();
      if (this.current.title == 'Love so sweet') {
        img.src = "../../arashi.jpg"
      }
      if (this.current.title == 'Cream') {
        img.src = "../../sexyzone.jpg"
      }
      if (this.current.title == 'Melty Bitter') {
        img.src = "../../meltybitter.jpg"
      }
      if (this.current.title == 'スノードーム') {
        console.log(this.songs[3])
        img.src = "../../snow.jpg"
      }
      if (this.current.title == 'ホンメイ') {
        console.log(this.songs[4])
        img.src = "../../neo.jpg"
      }
      if (this.current.title == 'フライデー・ナイト') {
        console.log(this.songs[5])
        img.src = "../../friday.jpg"
      }
    },
    prev() {
      this.isPlaying = true;
      this.current.audio.pause();
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }

      this.current = this.songs[this.index];
      this.current.audio.currentTime = 0
      this.current.audio.play();
      if (this.current.title == 'Love so sweet') {
        img.src = "../../arashi.jpg"
      }
      if (this.current.title == 'Cream') {
        img.src = "../../sexyzone.jpg"
      }
      if (this.current.title == 'Melty Bitter') {
        img.src = "../../meltybitter.jpg"
      }
      if (this.current.title == 'スノードーム') {
        console.log(this.songs[3])
        img.src = "../../snow.jpg"
      }
      if (this.current.title == 'ホンメイ') {
        console.log(this.songs[4])
        img.src = "../../neo.jpg"
      }
      if (this.current.title == 'フライデー・ナイト') {
        console.log(this.songs[5])
        img.src = "../../friday.jpg"
      }
    },
    // date() {
    //   const date = new Date();
    //   const year = date.getFullYear();
    //   const month = date.getMonth();
    //   let attrs2 = ref([
    //     {
    //       dot: 'purple',
    //       dates: new Date(year, month, 26),
    //     },
    //   ]
    //   );
    //   // return{
    //   //   attrs
    //   // }
    //   console.log(attrs2)
    // },
    heart() {
      this.orange = !this.orange
      const button = document.getElementById("button");
      const svg = document.getElementById("svg");

      let count = 0;

      const fill = "#DF760B";

      const t1 = gsap.timeline({ repeat: 1, yoyo: true });
      const t2 = gsap.timeline();
      const main = gsap.timeline();

      const ease = "elastic.out(1, 0.4)";

      t1.to("#heart-filled", 0.15, { morphSVG: "#heart", ease })
        .to("#heart", 0.15, { scale: 1.25, ease }, "<");

      t2.to("#heart", 0.15, { fill })
        .to("#heart-filled", 0.15, { opacity: 1 }, "<");

      main.add(t1);
      main.add(t2, "<85%");
      main.pause();

      count++ % 2 === 0 ? main.play() : main.reverse();
    },
    heart2() {
      const button = document.getElementById("button")
      const svg = document.getElementById("svg");

      let count = 0;

      const fill = "#DF760B";

      const t1 = gsap.timeline({ repeat: 1, yoyo: true })
      const t2 = gsap.timeline()
      const t3 = gsap.timeline()
      const main = gsap.timeline();

      const ease = "elastic.out(1, 0.4)";
      
      t1.to(["#heart", "#heart-filled"], 0.15, { scale: 1, ease })
      .to("#svg", 0.15, { scale: 1.25, ease }, "<");
      
      t2.to("#heart", 0.25, { fill })
      //   .to("#heart-filled", 0.25, { opacity: 1 }, "<");
      console.log(t2)
      console.log(t2._dur)

      // t3.to("#heart-filled", 0.25, { scale: 1, ease })
      //   .to("#heart", 0.25, { scale: 1.25, ease }, "<");

      main.add(t1);
      main.add(t2, "<85%");
      main.add(t3, "<15%");
      if (t2 == t3) {

      }
      main.pause();

      count++ % 2 === 0 ? main.play() : main.reverse();
    }
  },
  created() {
    this.current = this.songs[this.index];
    // 之後要換曲目，直接變更 index 值
    this.player = this.current.audio;
  },
  mounted() {
    this.prism = document.querySelector(".rec-prism");
    const time1 = document.getElementById("time1")
    const time2 = document.getElementById("time2")
    const time3 = document.getElementById("time3")
    let date = new Date();
    let until = new Date('2023-12-25 00:00:00');
    let until2 = new Date('2024-01-01 00:00:00');
    let until3 = new Date('2024-02-02 00:00:00');
    let dayNum = parseInt((until - date) / 1000 / 3600 / 24);
    let dayNum2 = parseInt((until2 - date) / 1000 / 3600 / 24);
    let dayNum3 = parseInt((until3 - date) / 1000 / 3600 / 24);
    time1.innerText = dayNum
    time2.innerText = dayNum2
    time3.innerText = dayNum3
    const img = document.getElementById("img")
    const songs = document.getElementById("songs")
    // 在音频准备好播放时调用
    // this.songs[0].audio.addEventListener('canplay', () => {
    //   console.log('good');
    //   // 在这里可以执行其他初始化操作
    // });

    // // 监听播放结束事件，以便在结束时重置播放状态
    // this.songs[0].audio.addEventListener('ended', () => {
    //   console.log("fin")
    //   this.isPlaying = !this.isPlaying;
    // });
  },
  setup() {
    const calendar = ref(null);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    let attrs = ref([
      {
        key: 'today',
        highlight: {
          fillMode: 'outline',
          color: 'orange',
        },
        dates: new Date(),
      },
      {
        dot: 'orange',
        dates: new Date(year, month, 25),
      },
      {
        dot: 'orange',
        dates: new Date(year, month + 1, 1),
      },
      {
        dot: 'orange',
        dates: new Date(year, month + 2, 2),
      },
    ]
    );
    function moveToday() {
      if (calendar.value) {
        calendar.value.move(new Date());
      }
    };
    function Chirstmas() {
      if (calendar.value) {
        calendar.value.move(new Date(year, month, 25));
      }
    };
    function newyear() {
      if (calendar.value) {
        calendar.value.move(new Date(year, month + 1, 1));
      }
    };
    function Graduation() {
      if (calendar.value) {
        calendar.value.move(new Date(year, month + 2, 2));
      }
    };
    const attributes = computed(() => [
      // 測試用console.log("yyy")
      // Attributes for todos
      ...todos.value.map(todo => ({
        dates: todo.dates,
        dot: {
          color: todo.color,
          ...(todo.isComplete && { class: 'opacity-75' }),
        },
        popover: {
          label: todo.description,
        },
      })),
    ]);
    return {
      attrs,
      calendar,
      moveToday,
      attributes,
      Chirstmas,
      newyear,
      Graduation,

    }
  },
  // setup() {
  //   const date = new Date();
  //   const year = date.getFullYear();
  //   const month = date.getMonth();
  //   let attrs = ref([
  //     {
  //       dot: 'purple',
  //       dates: new Date(year, month, 26),
  //     },
  //   ]
  //   );
  //   return {
  //     attrs
  //   }
  //   console.log(attrs)
  // }
}
</script>



<template>
  <ul class="nav">
    <li @click="showLogin()" data-storke="About me">About me</li>
    <li @click="showSignup()" data-storke="Web Page">Web Page</li>
    <li @click="showForgotPassword()" data-storke="Music">Music</li>
    <li @click="showContactUs()" data-storke="Calendar">Calendar</li>
    <!-- <li @click="showSubscribe()" data-storke="About me">About me</li> -->
  </ul>
  <div class="wrapper">
    <div class="rec-prism">
      <!-- <div class="face face-top">
        <div class="content">
          <h1>About me</h1>
          <small>わたしについて</small>

          <div class="me">
            Nmae : 劉芊孜
          </div>
          <div class="me">
            Gender ： ♀️
          </div>
          <div class="me">
            Birthday： 2000 / 08 / 10
          </div>
          <div class="me">
            Blood type ： O
          </div>
          <div class="field-wrapper">
            <a class="btn-7" href="#" @click="showThankYou()"><span>おわり</span></a>
          </div>
        </div>
      </div> -->
      <div class="face face-front">
        <div class="content">
          <h1>About me</h1>
          <small>わたしについて</small>
          <div class="me">
            Name : 劉芊孜
          </div>
          <div class="me">
            Gender ： ♀️
          </div>
          <div class="me">
            Birthday： 2000 / 08 / 10
          </div>
          <div class="me">
            Blood type ： O
          </div>
          <div class="field-wrapper tc head" style="position: absolute;top: 80px;right: 400px;">
            <h1 style="color: #8d6d52;">Icon</h1>
            <img src="../../GOODS-04345412-removebg-preview.png" alt="头像"
              style="position: absolute;top: 30px;left: 80px;">
          </div>
          <div class="field-wrapper" style="margin-top: 100px;">
            <a class="btn-7" href="#" @click="showThankYou()"><span>おわり</span></a>
          </div>
        </div>
      </div>
      <div class="face face-back">
        <div class="content">
          <h1>Music</h1>
          <small>おんがく</small>
          <div class="field-wrapper" style="margin-top: 5px;">
            <main style="display: flex;margin-left: 30px;">
              <section class="player" style="width: 60%;margin-right: 50px;">
                <h1 style="color:#f1c254 ;font-size: 33px;margin-bottom: 15px;">Now Play</h1>
                <img
                  src="https://2.bp.blogspot.com/-vjCUXS8gJjc/XMpDGkCF5vI/AAAAAAAMhbc/Yu_ya6Vf7lYw-K4Lehf4Y_pxkXW7g4hFgCLcBGAs/s1600/AS0005231_09.gif"
                  alt="" id="img" style="max-width: 280px;border-radius: 5px;margin-bottom: 10px;">
                <h1 class="song-title" style="color:#8d6d52 ;width:350px">{{ current.title }} - <span>{{ current.artist }}</span>
                </h1>
                <div class="controls">
                  <button class="prev" @click="prev">≪</button>
                  <button class="play" v-if="!isPlaying" @click="play2()" style="transform:rotate(30deg);">▽</button>
                  <button class="pause" v-else @click="pause">||</button>
                  <button class="next" @click="next">≫</button>
                </div>
              </section>
              <section class="playlist">
                <h3 style="font-size: 33px;">The Playlist</h3>
                <div class="pull"
                  style="width: 425px;height: 40px;background-color: #f9f6e3;;position: absolute;top:60px;right: 30px;color: #DF760B;">
                  <span style="font-size: 25px; margin-left: 100px">Title - Artist</span>
                </div>
                <button v-for="song in songs" :key="song.src" @click="play(song)"
                  :class="(song.src == current.src) ? 'song playing' : 'song'" class="songs" style="width:100%;margin-left:0">
                  {{ song.title }} - {{ song.artist }}
                </button>
                <div class="field-wrapper">
                  <a class="btn-7" href="#" @click="showThankYou()" style="position: absolute;bottom: 430px;z-index: 5;right:50px"><span>おわり</span></a>
                </div>
              </section>
            </main>

          </div>
        </div>
      </div>
      <div class="face face-right">
        <div class="content">
          <h1>Web Project</h1>
          <small>ウェブプロジェクト</small>
          <div class="all" style="margin-left: 30px;">
            <div class="left" style="display: flex;">
              <div class="field-wrapper">
                <h4 style="color: #8d6d52;">publish time : 2023 / 11 / 09</h4>
              </div>
              <div class="field-wrapper">
                <a href="https://ninomi0810.github.io/rilakkuma/" class="btn-72">Go to</a>
              </div>
            </div>
            <div class="right">
              <div class="field-wrapper" style="margin-bottom: 20px;;">
                <h4 style="color: #8d6d52; margin-bottom: 20px;">Page Preview</h4>
                <div class="img" style="display: flex;">
                  <img src="../../螢幕擷取畫面 2023-11-08 1742591.png" alt="" style="max-width: 350px;margin-right: 30px;">
                  <img src="../../螢幕擷取畫面 2023-11-08 214132.png" alt="" style="max-width: 350px;">
                </div>
              </div>

            </div>
          </div>
          <div class="field-wrapper">
            <a class="btn-7" href="#" @click="showThankYou()"><span>おわり</span></a>
          </div>
        </div>
      </div>
      <div class="face face-left">
        <div class="content">
          <h1>Calendar</h1>
          <small>カレンダー</small>
          <div class="all" style="display: flex;">
            <div class="field-wrapper" style="max-height: 400px;margin-top: 0;">
              <VCalendar
                style="height: 360px;width: 330px; color: #8d6d52;border: 1.3px solid transparent;  border-radius: 4px; "
                :min-date="new Date()" :attributes='attrs' transparent ref="calendar" class="VCalendar" />
              <button class="Today" @click="moveToday()">
                Today
              </button>
              <!-- </VCalendar> -->
              <!-- <VDatePicker  v-model="date" /> -->
            </div>
            <div class="count"
              style="margin-left: 35px;margin-right: 20px; width: 100%;max-height: 350px;color: #8d6d52;margin-top: 0;">
              <button class="field-wrapper2" @click="Chirstmas()">
                <div class="time-down" style="display: flex;">
                  <h3>Chirstmas </h3>
                  <h5>まで</h5>
                  <h5>:　あど</h5>
                  <div class="back">
                    <h3 id="time1"></h3>
                  </div>
                  <h5>days</h5>
                </div>
                <div class="time">
                  - 2023 / 12 / 25 -
                </div>
              </button>
              <button class="field-wrapper2" @click="newyear()">
                <div class="time-down" style="display: flex;">
                  <h3>New Year</h3>
                  <h5>まで</h5>
                  <h5>:　あど</h5>
                  <div class="back">
                    <h3 id="time2"></h3>
                  </div>
                  <h5>days</h5>
                </div>
                <div class="time">
                  - 2024 / 01 / 01 -
                </div>
              </button>
              <button class="field-wrapper2" @click="Graduation()">
                <div class="time-down" style="display: flex;">
                  <h3>Graduation </h3>
                  <h5>まで</h5>
                  <h5>:　あど</h5>
                  <div class="back">
                    <h3 id="time3"></h3>
                  </div>
                  <h5>days</h5>
                </div>
                <div class="time">
                  - 2024 / 02 / 02 -
                </div>
              </button>
            </div>
          </div>

          <div class="field-wrapper" style="margin-top: 0px;">
            <a class="btn-7" href="#" @click="showThankYou()"><span>おわり</span></a>
          </div>
        </div>
      </div>
      <div class="face face-bottom">
        <div class="content">
          <div class="thank-you-msg" :class="{ 'orange': this.orange == true }">
            Thank　you　!
            <br>
            <button id="button" type="button" class="heart" @click="heart()">
              <svg id="svg" viewBox="0 0 24 24" aria-hidden="true"
                class="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue">
                <g>
                  <path id="heart" fill="#f1c254"
                    d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                  </path>
                  <path id="heart-filled" style="opacity:0;" fill="#DF760B"
                    d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                  </path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
* {
  font-family: 'Darumadrop One', sans-serif;
  box-sizing: border-box;

  -webkit-touch-callout: none;
  /* iOS Safari */

  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  /* Konqueror */

  -moz-user-select: none;
  /* Firefox */

  -ms-user-select: none;
  /* Internet Explorer/Edge */

  user-select: none;
  /* Non-prefixed version, currently not supported by any browser */
}

html {
  height: 100%;
}

body {
  width: 100%;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  font-size: 14px;
  background: #f6fffd;
  margin: 0;
  text-align: center;
  overflow: auto;

}

.heart {
  all: unset;
  display: flex;
  width: 6vmin;
  cursor: pointer;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  margin-left: 45%;
  margin-top: 3%;
}

.face .content {
  color: #666;
}

.face .content h1 {
  font-size: 30px;
  color: #DF760B;
}

.face .content .field-wrapper {
  margin-top: 30px;
  position: relative;
  // button{
  //   width: 250px;
  //   height: 80px;
  //   border-radius: 10px;
  //   border: none;
  //   background-color: #FFF6BD;
  // }
}

.face .content .field-wrapper label {
  position: absolute;
  pointer-events: none;
  font-size: 0.85em;
  top: 40%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  transition: all ease-in 0.25s;
  color: #999999;
}

.face .content .field-wrapper textarea {
  resize: none;
  line-height: 1em;
}

.face .content .field-wrapper textarea:focus+label,
.face .content .field-wrapper textarea:not(:placeholder-shown)+label {
  top: -25%;
}

.thank-you-msg {
  position: absolute;
  width: 80%;
  height: 130px;
  text-align: center;
  font-size: 2em;
  color: #f1c254;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);

  i {
    margin-top: 20px;
    font-size: 40PX;
  }
}

.orange {
  color: #DF760B
}

// .face .thank-you-msg:after {
//   position: absolute;
//   content: '';
//   width: 50px;
//   height: 25px;
//   border: 10px solid #FFF6BD;
//   border-right: 0;
//   border-top: 0;
//   left: 50%;
//   top: 60%;
//   -webkit-transform: translate(-50%, -50%) rotate(0deg) scale(0);
//   transform: translate(-50%, -50%) rotate(0deg) scale(0);
//   -webkit-animation: success ease-in 0.15s forwards;
//   animation: success ease-in 0.15s forwards;
//   -webkit-animation-delay: 2.5s;
//   animation-delay: 2.5s;
// }


.field-wrapper {
  h5 {
    color: #fcd271;
  }
}

.me {
  font-size: 20px;
  color: #8d6d52;
  margin-left: 20px;
  margin-top: 30px;
}

.Today {
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: #8d6d52;
  margin-left: 35%;
  position: absolute;
  bottom: 25px;
  left: 0;
  background-color: #f7e6af;

  &:hover {
    color: #fff;
    background-color: #f1c254;

  }
}

.field-wrapper2 {
  border: 1.3px solid #8d6d52;
  margin-bottom: 30px;
  border-radius: 7px;
  width: 100%;
  background-color: transparent;
  color: #8d6d52;
}

.time-down {
  margin-top: 10px;
  margin-left: 5%;

  h5 {
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
  }

  h3 {
    margin-left: 10px;
    text-decoration: underline #f7e6af 5px;
    margin-right: 5px;
  }

  .back {
    width: 47px;
    height: 47px;
    background-color: #f7e6af;
    border-radius: 50%;
    position: relative;

    h3 {
      position: absolute;
      top: 4px;
      right: 4px;
      text-decoration: none;
    }
  }
}

.time {
  margin-bottom: 10px;
}

.nav {
  margin: 0px 0 0 23%;
  padding: 0;
  padding-top: 30px;

}

.nav li {
  display: inline-block;
  list-style-type: none;
  font-size: 33px;
  margin: 0 27px;
  color: #f5edd2;
  position: relative;
  cursor: pointer;
  // &:active{
  //   background-color: #DF760B;
  // }
}

.nav li:before {
  content: attr(data-storke);
  position: absolute;
  z-index: -1;
  -webkit-text-stroke: 5px #DF760B;
}

.nav li:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  border-bottom: 2px solid #DF760B;
  transition: all ease-in 0.25s;
}

.nav li:hover:after {
  width: 100%;
}

.psw,
.signup,
.singin {
  display: block;
  margin: 20px 0;
  font-size: 0.75em;
  text-align: center;
  color: #8d6d52;
  cursor: pointer;
}

small {
  font-size: 15px;
  color: #fcd271;
}

@-webkit-keyframes success {
  from {
    -webkit-transform: translate(-50%, -50%) rotate(0) scale(0);
  }

  to {
    -webkit-transform: translate(-50%, -50%) rotate(-45deg) scale(1);
  }
}


.tc {
  text-align: center;
}

.tc img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: all .2s cubic-bezier(0, 0.97, 0.77, 1.34) .1s;

  -webkit-animation: circle 5s linear infinite;
  animation: circle 5s linear infinite;
}

@-webkit-keyframes circle {


  0% {
    opacity: .5;
  }


  50% {
    opacity: 1;
  }

  100% {
    opacity: .5;
  }


}

@keyframes circle {

  0% {
    opacity: .5;
  }


  50% {
    opacity: 1;
  }

  100% {
    opacity: .5;
  }


}

html *,
html *:before,
html *:after {
  box-sizing: border-box;
  transition: 0.5s;
}

html i,
html em,
html b,
html strong,
html span {
  transition: none;
}

*:before,
*:after {
  z-index: -1;
}

a {
  text-align: center;
  text-decoration: none;
  line-height: 40px;
  color: black;
}

[class^="btn-"] {
  position: relative;
  display: block;
  margin: 20px auto;
  width: 100%;
  height: 30px;
  max-width: 250px;
  text-transform: uppercase;
  overflow: hidden;
  border: 1px solid currentColor;
}

.btn-7 {
  // background-color: #fcd271;
  color: #fcd271;
  height: 40px;
  border-radius: 5px;
  border: 1.5px solid #fcd271;
  font-size: 20px;
  position: relative;

  span {
    position: absolute;
    bottom: 0.2px;
    right: 40%;
  }
}

.btn-7:hover {
  color: #fff;
  background-color: #fcd271;
}

.btn-7:hover:before,
.btn-7:hover:after,
.btn-7:hover span:before,
.btn-7:hover span:after {
  height: 80px;
}

.btn-7:active {
  background: #8d6d52;
}

.btn-72 {
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: #8d6d52;
  margin-left: 35%;
  position: absolute;
  // top: 10px;
  left: 200px;
  background-color: #f7e6af;

  &:hover {
    color: #fff;
    background-color: #f1c254;

  }
}

@-webkit-keyframes put {
  0% {
    -webkit-transform: scale(.1, .1);
    transform: scale(.1, .1);
  }

  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}

@keyframes put {
  0% {
    -webkit-transform: scale(.1, .1);
    transform: scale(.1, .1);
  }

  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}

.controls {
  margin-top: -10px;
  margin-left: 50px;

  button {
    border: none;
    background-color: transparent;
    color: #8d6d52;
    font-size: 30px;
    margin-left: 20px;
  }
}

.playlist {
  color: #f1c254;

  h3 {
    margin-bottom: 30px;
  }

  button {
    width: 60%;
    border: none;
    background-color: transparent;
    color: #8d6d52;
    font-size: 22px;
    margin-left: 40px;
    margin-bottom: 10px;

    &:hover {
      color: #DF760B;
    }
  }
}

.songs {
  color: #DF760B;
}

.wrapper {
  width: 850px;
  height: 530px;
  margin: 80px auto 50px;
  /* 设置路径 */
  -webkit-perspective: 600px;
  perspective: 600px;
  text-align: left;

  -webkit-animation: put 1s cubic-bezier(0.29, 1.18, 0.91, 1.68) 1;

  animation: put 1s cubic-bezier(0.29, 1.18, 0.91, 1.68) 1;
}


.rec-prism {
  width: 850px;
  height: 100%;
  position: absolute;
  /* 设置3D场景*/
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translateZ(-100px);
  transform: translateZ(-100px);
  transition: -webkit-transform 0.5s ease-in;
  transition: transform 0.5s ease-in;
  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;
}

.face {
  position: absolute;
  width: 850px;
  height: 530px;
  padding: 20px;
  background: #f9f6e3;
  border: 4px solid #a0744b;
  border-radius: 3px;
  /*每一面的背面是否可以见*/
  backface-visibility: hidden;
}

/* 正面 */
.face-front {
  -webkit-transform: rotateY(0deg) translateZ(175px);
  transform: rotateY(0deg) translateZ(175px);
}

/* 上面 */
.face-top {
  // height: 350px;
  -webkit-transform: rotateX(90deg) translateZ(175px);
  transform: rotateX(90deg) translateZ(175px);
}

/* 背面 */
.face-back {
  -webkit-transform: rotateY(180deg) translateZ(175px);
  transform: rotateY(180deg) translateZ(175px);
}

/* 右面 */
.face-right {
  -webkit-transform: rotateY(90deg) translateZ(175px);
  transform: rotateY(90deg) translateZ(175px);
}

/* 左面 */
.face-left {
  -webkit-transform: rotateY(-90deg) translateZ(175px);
  transform: rotateY(-90deg) translateZ(175px);
}

/* 底面 */
.face-bottom {
  height: 350px;
  -webkit-transform: rotateX(-90deg) translateZ(325px);
  transform: rotateX(-90deg) translateZ(325px);
}
</style>
