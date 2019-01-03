class Guest {
    _id:string;
    name: string;
    roomSize: string;
    roomNum: string; //number
    payment: string;
    numNight: string; //number
    date: Date;
    status: string;
  
  constructor(){
    this.name = ""
    this.roomSize = ""
    this.roomNum = ""
    this.payment = ""
    this.numNight = ""
    this.date = new Date()
    this.status = ""
    }

}   
export default Guest;