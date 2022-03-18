class Convert_Miliseconds{
  constructor(milliseconds){
    this.seconds = Math.floor((milliseconds/1000) % 60);
    this.minutes = Math.floor((milliseconds/(1000*60)) % 60);
    this.hours = Math.floor((milliseconds/(1000*60*60)) % 24);
    this.days = Math.floor((milliseconds/(1000*60*60*60)) % 24);
  };

  get as_array(){
    return [this.seconds,this.minutes,this.hours,this.days]
  };

  get as_obj(){
    return {...this}
  }

  get as_timestamp(){
    return `${this.days}:${this.hours}:${this.minutes}:${this.seconds}`;
  }
};

