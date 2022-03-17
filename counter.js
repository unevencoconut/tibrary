/**
 * Number Counter
 * ------------------------------------------------------
 * Counter begins at zero
 */

class Counter{
  constructor(){
    this.count = 0;
  };

  /** Get the current value of the Counter */
  get value(){
      return this.count
  };

  get value_string(){
    return this.count.toString()
  }

  /** Resets the Counter to Zero */
  get reset(){
    this.count = 0;
    return
  };

  /** Increase the value of the Counter by one */
  get increment(){
      this.count++
      return;
  };

  /** Decrease the value of the Coutner by one */
  get decrement(){
      this.count--;
      return
  };

  /** Get the value of the Counter increased by one */
  /** This does not change the actual Counter Value */
  get next(){
      return this.count+1
  };

  /** Get the value of the Counter decreased by one */
  /** This does not change the actual Counter Value */
  get prev(){
      return this.count-1
  };

  /** Sets the Counter to a brand new value */
  set value(new_value){
      this.count = new_value;
      return
  };
};

