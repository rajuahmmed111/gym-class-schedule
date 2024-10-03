import { model, Schema } from "mongoose";

const BookingSchema = new Schema({
  trainee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  schedule: {
    type: Schema.Types.ObjectId,
    ref: 'ClassSchedule',
    required: true,
  },
  status: { type: String, enum: ['booked', 'canceled'], default: 'booked' },
});

export const Booking = model('Booking', BookingSchema);
