<template>
    <div class="user-card">
        <div class="user-card-head" :style="{backgroundImage: 'url(' + backgroundUrl + ')'}"></div>
        <div class="user-card-body">
            <div class="user-card-body-left">
                <img :src="avatarUrl" :class="{round: isRoundAvatar}">
            </div>
            <div class="user-card-body-right">
                <div class="user-card-body-right-text">
                    <div class="user-card-body-right-text-username"><a :href="userPageUrl">{{ username }}</a></div>
                    <div class="user-card-body-right-text-id">ID:{{ userId }}</div>
                    <span style="margin-right: 40px; margin-left: 9px;">关注: {{ followCount }}</span>
                    <span>粉丝: {{ localFanCount }}</span>
                
              
                <div class="user-card-body-button">
                    <button @click="handleFollow">{{ localIsFollowing ? '取消关注' : '关注' }}</button>
                    <button @click="handleMessage">发消息</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"MxauserCard",
    props: {
        userId: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        avatarUrl: {
            type: String,
            required: true
        },
        backgroundUrl: {
            type: String,
            required: true
        },
        isRoundAvatar: {
            type: Boolean,
            default: true
        },
        followCount: {
            type: Number,
            default: 0
        },
        fanCount: {
            type: Number,
            default: 0
        },
        userPageUrl: {
            type: String,
            required:true
        },
        isFollowing: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            localIsFollowing: this.isFollowing,
            localFanCount: this.fanCount 
        };
    },
  
    watch: {
      fanCount(newVal) {
        this.localFanCount = newVal;
      },
      isFollowing(newVal) {
        this.localIsFollowing = newVal;
      }
    },
  
    methods: {
        handleFollow() {
          this.localIsFollowing = !this.localIsFollowing;
            if (this.localIsFollowing) {
            this.localFanCount++;
            } else {
             this.localFanCount--;
            }
            this.localFanCount = this.localFanCount < 0 ? 0 : this.localFanCount;
            this.$emit('handleFollow', this.localIsFollowing);
        },
        handleMessage() {
            this.$emit('handleMessage', this.userId);
        }
    }
  };
  </script>
  
  <style scoped>
  .user-card {
    width: 366px;
    height: 250px;
    box-shadow: 2px 2px 5px lightgray;
    border-radius: 5px;
  }
  
  .user-card-head {
    background-size: cover;
    width: 100%;
    height: 85px;
  }
  
  .user-card-body {
    width: 100%;
    height: calc(100% - 85px);
    box-sizing: border-box;
    padding-top: 12px;
    background-color: rgb(232, 244, 244);
  }
  
  .user-card-body-left {
    width: 70px;
    height: 100%;
    float: left;
    text-align: center;
  }
  
  .user-card-body-left img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  
  .user-card-body-right {
    width: calc(100% - 70px);
    float: left;
    height: 100%;
    margin-bottom: 10px;
  }
  
  .user-card-body-right-text {
    width: 100%;
    height: 100%;
  }
  
  .user-card-body-right-text-username {
    padding-left: 10px;
    font-size: 16px;
    color: #222222;
    font-weight: bold;
  }
  
  a{
    text-decoration: none;
    font-size: 16px;
    color: #222222;
    font-weight: bold;
  }

  .user-card-body-right-text-id {
    padding-left: 10px;
    font-size: 14px;
    color: #888888;
  }
  
  .user-card-body-button {
    text-align: center;
    margin-top: 26px;
  }
  
  .user-card-body-button button {
    width: 45%;
    height: 35px;
    margin: 0 5px;
    padding: 5px 10px;
    background-color: rgb(250, 243, 243);
    color: black;
    cursor: pointer;
    border-radius: 5px;
    border: #79aee6 solid 2px;
  }
  
  .user-card-body-button button:hover {
    background-color: #cadff5;
    box-shadow: 2px 2px 5px lightgray;
  }
  
  a:hover{
    cursor: pointer;
  }
  </style>