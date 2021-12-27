<!-- 演示时必须单击页面进入全屏模式 -->
<template>
  <dv-full-screen-container @click.native="click">
    <div class="header" />
    <div class="content">
      <div class="left">
        <div class="left-item-1">
          <div class="title1">xxxxxxxxx</div>
          <div class="grid">
            <div class="grid-item">
              <span>xxx</span>
              <img src="@/assets/dashboard/img.png" alt>
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <dv-digital-flop :config="numberConfig1" />
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <dv-digital-flop :config="numberConfig2" />
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <img src="@/assets/dashboard/img.png" alt>
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <dv-digital-flop :config="numberConfig3" />
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <dv-digital-flop :config="numberConfig4" />
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <img src="@/assets/dashboard/img.png" alt>
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <dv-digital-flop :config="numberConfig5" />
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <dv-digital-flop :config="numberConfig6" />
            </div>
          </div>
        </div>
        <div class="left-item-2">
          <div class="title1">xxxxxxxxx</div>
          <div class="grid">
            <div class="grid-item">
              <span>xxx</span>
              <dv-digital-flop :config="numberConfig7" />
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <dv-digital-flop :config="numberConfig8" />
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <dv-digital-flop :config="numberConfig9" />
            </div>
            <div class="grid-item">
              <span>xxx</span>
              <dv-digital-flop :config="numberConfig10" />
            </div>
          </div>
          <div class="chart">
            <dv-charts :option="option" />
          </div>
        </div>
      </div>
      <div class="center">
        <div class="title2">xxxxxxxxx</div>
        <div class="center-content">
          <div class="center-text-1">xxx</div>
          <div class="center-text-2">9527</div>
          <div class="center-text-3">xxx</div>
          <div class="capsule">
            <dv-capsule-chart :config="capsuleConfig" />
          </div>
          <div class="scroll">
            <dv-scroll-board :config="scroll1" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-item-1">
          <div class="title1">xxxxxxxxx</div>
          <div class="img">
            <img src="@/assets/dashboard/img.png" alt>
            <img src="@/assets/dashboard/img.png" alt>
            <img src="@/assets/dashboard/img.png" alt>
          </div>
          <div class="scroll">
            <dv-scroll-board :config="scroll2" />
          </div>
        </div>
        <div class="right-item-2">
          <div class="title1">xxxxxxxxx</div>
          <div class="grid">
            <div class="grid-item">
              <img src="@/assets/dashboard/icon1.png" alt>
              <div>
                <span class="title">xxx</span>
                <dv-digital-flop :config="numberConfig11" />
              </div>
            </div>
            <div class="grid-item">
              <img src="@/assets/dashboard/icon2.png" alt>
              <div>
                <span class="title">xxx</span>
                <dv-digital-flop :config="numberConfig12" />
              </div>
            </div>
          </div>
          <div class="scroll">
            <dv-scroll-board :config="scroll3" />
          </div>
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
import dayjs from 'dayjs'
import screenfull from 'screenfull'
export default {
  name: 'Dashboard',
  data() {
    return {
      option: {
        grid: {
          top: 10
        },
        xAxis: {
          data: ['xxx', 'xxx', 'xxx', 'xxx'],
          axisLine: {
            style: {
              stroke: 'rgb(8,123,149)',
              lineWidth: 1
            }
          },
          axisLabel: {
            style: {
              stroke: 'rgb(8,123,149)',
              lineWidth: 1,
              fontSize: 12
            }
          }
        },
        yAxis: {
          data: 'value',
          axisLine: {
            style: {
              stroke: 'rgb(8,123,149)',
              lineWidth: 1
            }
          },
          axisLabel: {
            style: {
              stroke: 'rgb(8,123,149)',
              lineWidth: 1
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            data: [61, 279, 203, 76],
            type: 'bar',
            independentColor: true,
            independentColors: ['rgb(80,152,254)', 'rgb(80,220,193)', 'rgb(188,102,254)', 'rgb(254,140,67)']
          }
        ]
      },
      capsuleConfig: {
        data: [
          {
            name: 'xx',
            value: 167
          },
          {
            name: 'xx',
            value: 67
          },
          {
            name: 'xx',
            value: 123
          },
          {
            name: 'xx',
            value: 55
          },
          {
            name: 'xx',
            value: 98
          },
          {
            name: 'xx',
            value: 167
          },
          {
            name: 'xx',
            value: 67
          },
          {
            name: 'xx',
            value: 123
          },
          {
            name: 'xx',
            value: 55
          },
          {
            name: 'xx',
            value: 98
          },
          {
            name: 'xx',
            value: 123
          },
          {
            name: 'xx',
            value: 55
          },
          {
            name: 'xx',
            value: 98
          },
          {
            name: 'xx',
            value: 167
          },
          {
            name: 'xx',
            value: 123
          },
          {
            name: 'xx',
            value: 55
          },
          {
            name: 'xx',
            value: 98
          }
        ]
      },
      scroll1: {
        header: ['xxx', 'xxx', 'xxx', 'xxx', 'xxx'],
        data: [
          ['xxx', 'xxx', 'xxxxxxxxx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000)).format('MM-DD HH:mm:ss'), 'xx'],
          ['xxx', 'xxx', 'xxxxxxxxx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000)).format('MM-DD HH:mm:ss'), 'xx'],
          ['xxx', 'xxx', 'xxxxxxxxx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000)).format('MM-DD HH:mm:ss'), 'xx'],
          ['xxx', 'xxx', 'xxxxxxxxx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000)).format('MM-DD HH:mm:ss'), 'xx'],
          ['xxx', 'xxx', 'xxxxxxxxx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000)).format('MM-DD HH:mm:ss'), 'xx']
        ],
        rowNum: 4,
        headerHeight: 40,
        headerBGC: 'rgb(12, 46, 86)',
        oddRowBGC: 'rgba(12, 47, 86, 0.6)',
        evenRowBGC: 'rgba(12, 47, 86, 0.3)'
      },
      scroll2: {
        header: ['xxx', 'xxx', 'xxx'],
        data: [
          ['xxxxxxxxx', 'xx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000)).format('MM-DD HH:mm:ss')],
          ['xxxxxxxxx', 'xx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000)).format('MM-DD HH:mm:ss')],
          ['xxxxxxxxx', 'xx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000)).format('MM-DD HH:mm:ss')],
          ['xxxxxxxxx', 'xx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000)).format('MM-DD HH:mm:ss')],
          ['xxxxxxxxx', 'xx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000)).format('MM-DD HH:mm:ss')]
        ],
        rowNum: 5,
        headerHeight: 40,
        headerBGC: 'rgb(12, 46, 86)',
        oddRowBGC: 'rgba(12, 47, 86, 0.6)',
        evenRowBGC: 'rgba(12, 47, 86, 0.3)'
      },
      scroll3: {
        header: ['xxx', 'xxx', 'xxx', 'xxx'],
        data: [
          ['xxxxxxxxx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000 + (5 * 60 * 1000))).format('MM-DD HH:mm:ss'), dayjs(+new Date() - Math.floor(Math.random() * 5 * 60 * 1000)).format('MM-DD HH:mm:ss'), 'xxx'],
          ['xxxxxxxxx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000 + (5 * 60 * 1000))).format('MM-DD HH:mm:ss'), dayjs(+new Date() - Math.floor(Math.random() * 5 * 60 * 1000)).format('MM-DD HH:mm:ss'), 'xxx'],
          ['xxxxxxxxx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000 + (5 * 60 * 1000))).format('MM-DD HH:mm:ss'), dayjs(+new Date() - Math.floor(Math.random() * 5 * 60 * 1000)).format('MM-DD HH:mm:ss'), 'xxx'],
          ['xxxxxxxxx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000 + (5 * 60 * 1000))).format('MM-DD HH:mm:ss'), dayjs(+new Date() - Math.floor(Math.random() * 5 * 60 * 1000)).format('MM-DD HH:mm:ss'), 'xxx'],
          ['xxxxxxxxx', dayjs(+new Date() - Math.floor(Math.random() * 30 * 60 * 1000 + (5 * 60 * 1000))).format('MM-DD HH:mm:ss'), dayjs(+new Date() - Math.floor(Math.random() * 5 * 60 * 1000)).format('MM-DD HH:mm:ss'), 'xxx']
        ],
        rowNum: 3,
        headerHeight: 40,
        headerBGC: 'rgb(12, 46, 86)',
        oddRowBGC: 'rgba(12, 47, 86, 0.6)',
        evenRowBGC: 'rgba(12, 47, 86, 0.3)'
      },
      numberConfig1: {
        number: [45]
      },
      numberConfig2: {
        number: [82]
      },
      numberConfig3: {
        number: [887]
      },
      numberConfig4: {
        number: [1711]
      },
      numberConfig5: {
        number: [234]
      },
      numberConfig6: {
        number: [221]
      },
      numberConfig7: {
        number: [61]
      },
      numberConfig8: {
        number: [279]
      },
      numberConfig9: {
        number: [203]
      },
      numberConfig10: {
        number: [76]
      },
      numberConfig11: {
        number: [511]
      },
      numberConfig12: {
        number: [94]
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.numberConfig8 = {
        number: [this.numberConfig8.number[0] + Math.floor(Math.random() * 6)]
      }
      this.numberConfig9 = {
        number: [this.numberConfig9.number[0] + Math.floor(Math.random() * 6)]
      }
      this.numberConfig10 = {
        number: [this.numberConfig10.number[0] + Math.floor(Math.random() * 6)]
      }
      this.numberConfig11 = {
        number: [this.numberConfig11.number[0] + Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10)]
      }
      this.numberConfig12 = {
        number: [this.numberConfig12.number[0] + Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10)]
      }
      this.option.series[0].data = [this.numberConfig7.number[0], this.numberConfig8.number[0], this.numberConfig9.number[0], this.numberConfig10.number[0]]
      this.option = JSON.parse(JSON.stringify(this.option))
    }, 5000)
  },
  methods: {
    click() {
      screenfull.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
// css 非特殊情况，严格使用百分比和 flex 布局，实现较强的分辨率适配性!
#dv-full-screen-container {
  background-image: url("~@/assets/dashboard/bg.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  color: #fff; // 先默认白色文字
}
.title1 {
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("~@/assets/dashboard/title.png");
  background-size: 100% 100%;
  font-size: 1.2vw;
  font-weight: bold;
}
.title2 {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("~@/assets/dashboard/title.png");
  background-size: 100% 100%;
  font-size: 2vw;
  font-weight: bold;
}
.header {
  height: 8%;
}
.content {
  flex: 1; // 撑满父元素
  justify-content: space-between;
  display: flex;
  padding: 2% 2%;
  .left {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .left-item-1 {
      height: 38%;
      background-image: url("~@/assets/dashboard/dian1.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      .grid {
        flex: 1; // 撑满父元素
        display: flex;
        flex-wrap: wrap;
        .grid-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 33%;
          font-size: 1vw;
          color: rgb(13, 155, 255);
          img {
            padding: 10% 0;
            width: 35%;
          }
        }
      }
    }
    .left-item-2 {
      height: 60%;
      background-image: url("~@/assets/dashboard/dian1.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      .grid {
        height: 25%;
        display: flex;
        justify-content: space-around;
        .grid-item {
          width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 0.8vw;
          color: rgb(96, 175, 228);
        }
      }
      .chart {
        flex: 1; // 撑满父元素
      }
    }
  }
  .center {
    width: 46%;
    background-image: url("~@/assets/dashboard/dian2.png");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    .center-content {
      flex: 1; // 撑满父元素
      display: flex;
      flex-direction: column;
      align-items: center;
      .center-text-1 {
        width: 25%;
        height: 6%;
        margin-top: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5vw;
        font-weight: bold;
        background-image: url("~@/assets/dashboard/title_small.png");
        background-size: 100% 100%;
        color: rgb(13, 155, 255);
      }
      .center-text-2 {
        height: 8%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5vw;
        font-weight: bold;
        color: yellow;
      }
      .center-text-3 {
        width: 25%;
        height: 6%;
        margin-bottom: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5vw;
        font-weight: bold;
        background-image: url("~@/assets/dashboard/title_small.png");
        background-size: 100% 100%;
        color: rgb(13, 155, 255);
      }
      .capsule {
        width: 75%;
        flex: 1;
      }
      .scroll {
        height: 30%;
        width: 90%;
      }
    }
  }
  .right {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .right-item-1 {
      height: 60%;
      background-image: url("~@/assets/dashboard/dian1.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img {
        height: 35%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        img {
          width: 40%;
          margin-top: 6%;
        }
      }
      .scroll {
        height: 50%;
        width: 90%;
        margin-top: 8%;
        .dv-scroll-board {
          height: 95%;
        }
      }
    }
    .right-item-2 {
      height: 38%;
      background-image: url("~@/assets/dashboard/dian1.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .grid {
        height: 35%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .grid-item {
          display: flex;
          justify-content: center;
          width: 50%;
          img {
            width: 35%;
            position: relative;
            left: 20px;
          }
          div {
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            .title {
              font-size: 1vw;
              font-weight: bold;
              color: rgb(13, 155, 255);
              margin-bottom: 5%;
            }
          }
        }
      }
      .scroll {
        height: 50%;
        width: 90%;
        .dv-scroll-board {
          height: 95%;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.dv-scroll-board {
  height: 90%;
  border-radius: 5px;
  overflow: hidden;
  color: rgb(177, 206, 226);
  .header-item {
    text-align: center;
  }
  .ceil {
    text-align: center;
  }
}
</style>
