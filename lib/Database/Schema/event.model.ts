import { Schema,model,models,Document} from "mongoose";

export interface IEvent extends Document{
    _id:string;
    title: string;
    description?: string;
    location?: string;
    createdAt?: Date;
    imgUrl: string;
    startDateTime?: Date;
    endDateTime?: Date;
    price?: boolean;
    isFree: string;
    url?: string;
    category: {_id:string,name:string};
    organiser: {_id:string,firsrname:string,lastname:string};
}

const eventSchema = new Schema ({
    title:{type:String,required: true},
    description:{type:String},
    location:{type:String},
    createdAt:{type:Date,default:Date.now},
    imgUrl:{type:String,required: true},
    startDateTime:{type:Date,default:Date.now},
    endDateTime:{type:Date,default:Date.now},
    price:{type:Boolean,default:false},
    isFree:{type:String,required: true, unique:true},
    url:{type:String},
    category:{type:Schema.Types.ObjectId,ref:'Category'},
    organiser:{type:Schema.Types.ObjectId,ref:'Category'}

})

const Event = models.Event || model('Event',eventSchema);

export default Event;