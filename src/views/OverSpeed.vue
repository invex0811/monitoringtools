<template>
  <div class="over-speed">
    <h2>Over speed</h2>
    <div class="time">
      <input @keyup="calcSpeed" type="number" v-model.number="timeHours" placeholder="Hours">
      <b style="font-size: 30px;">:</b>
      <input @keyup="calcSpeed" type="number" v-model.number="timeMinutes" placeholder="Minutes">
    </div>


    <div class="mile">
      <input @keyup="calcSpeed" type="number" id="mile" v-model.number="miles" placeholder="Miles">
      <span v-if="checkSecondMiles"><b style="font-size: 30px;">-</b><input  type="number" id="secondMile" v-model.number="secondMiles" placeholder="Miles"></span>
    </div>
<!--    <div class="wrap-checkbox">-->
<!--      <label for="checkSecondMiles"><input id="checkSecondMiles" type="checkbox" v-model="checkSecondMiles">2 miles</label>-->
<!--    </div>-->
    <label class="label wrap-checkbox" for="checkSecondMiles">
      <div class="toggle">
        <input class="toggle-state" type="checkbox" value="check" id="checkSecondMiles" v-model="checkSecondMiles"/>
        <div class="indicator"></div>
      </div>
      <div class="label-text">2 miles</div>
    </label>

    <div class="wrap-button">
      <v-btn
        class="btn"
        color="primary"
        @click="calcSpeed">
        OK
      </v-btn>
      <v-btn
        class="btn"
        color="secondary"
        @click="showModal"
      >
        <v-icon>far fa-list-alt</v-icon>
      </v-btn>
<!--      <button class="speedList" @click="showModal" title="Speed list">-->
<!--        <i class="fi-rr-document"  title="Speed list" ></i>-->
<!--      </button>-->
    </div>


    <div class="speed">
     <span :class="{'redSpeed' : redSpeed > 95}">{{  inputValue }}</span>
    </div>
  </div>

  <SpeedList ref="modal"/>
  <router-view/>
</template>

<script>
import SpeedList from "@/components/SpeedList";

export default {
  name: "OverSpeed",
  components: {SpeedList},
  data() {
    return{
      timeHours: '',
      timeMinutes: '',
      miles: '',
      secondMiles:'',
      timeToTenth: '',
      overSpeed: '',
      inputValue: '',
      redSpeed: '',
      checkSecondMiles: false,
    }
  },
  methods:{
    calcSpeed() {
      this.timeToTenth = this.timeHours + (this.timeMinutes / 60)
      if (this.timeHours || this.miles ? 0 : 1 === 1)
        this.inputValue = "Enter all values"
      else if (this.timeHours || this.timeMinutes ? 0 : 1 === 1)
        this.inputValue = "Enter time"
      else if (this.miles <= 0)
        this.inputValue = "Enter miles"

      else
        if (this.checkSecondMiles === false)
          this.inputValue = this.miles / this.timeToTenth
        else
          this.inputValue = (this.miles - this.secondMiles ) / this.timeToTenth
        this.redSpeed = this.inputValue
        this.inputValue = 'Speed: ' + this.inputValue.toFixed(2)
    },
    showModal(){
      return this.$refs.modal.show = true
    }
  },

}
</script>

<style scoped>

.over-speed{
  display: flex;
  flex-direction: column;
  align-items: center;
}
input[type="number"]{
  width: 120px;
}
input:focus{
  box-shadow: 0 0 5px #000;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
span{
  font-size: 30px;
}
.redSpeed{
  color: red;
}
.wrap-button{
  display: flex;
}
.wrap-checkbox{
  margin-top: 10px;
}
.speedList{
  width: 50px;
  font-size: 30px;
  text-decoration: none;
  cursor: pointer;
  color: #790e8b;
  text-align: center;
}
.speedList:hover{
  color: #fff;
  transition: .3s;
}
.calc-speed_btn{
  width: 200px;
  margin-right: 10px;
}
.speed{
  margin-top: 20px;
}
.span-speed-list{
  display: block;
  font-size: 20px;
  text-align: center;
}

</style>