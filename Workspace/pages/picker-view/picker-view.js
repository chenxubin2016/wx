const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1950; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 5,
    days: days,
    day: 16,
    year: date.getFullYear(),
    value: [2018,3,24],
  },
  onLoad:function(){
    const v=this.data.value;
    const d=new Date(v[0],v[1]+1,0);
    const days=[];
    for(let i=1; i<=d.getDate();i++){
      days.push(i);
    }
    this.setData({
      year:v[0],
      month:v[1]+1,
      day:v[2]+1,
      days:days
    });
  },
  bindChange: function (e) {
    console.log(e)
    const v = e.detail.value;
    const d=new Date(v[0]+1950,v[1]+1,0);
    const days=[];
    for(let i=1; i<=d.getDate();i++){
      days.push(i);
    }
    this.setData({
      year: v[0]+1950,
      month: v[1] + 1,
      day: v[2] + 1,
      days: days
    });
  }
})