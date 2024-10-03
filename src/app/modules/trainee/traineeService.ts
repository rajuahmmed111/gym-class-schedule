import { Trainee } from "../../models/traineeModel";
import { ITrainee } from "./trainee.interface";

// Register a new trainee
export const registerTrainee = async (
  data: Partial<ITrainee>,
): Promise<ITrainee> => {
  const trainee = new Trainee(data);
  return await trainee.save();
};

// Book a class for a trainee
export const bookClass = async (
  traineeId: string,
  classId: string,
): Promise<ITrainee | null> => {
  const trainee = await Trainee.findById(traineeId);
  if (!trainee) return null; 
  if (trainee.bookedClasses.includes(classId)) return null; 

  trainee.bookedClasses.push(classId);
  return await trainee.save();
};

// Cancel a class booking for a trainee
export const cancelBooking = async (
  traineeId: string,
  classId: string,
): Promise<ITrainee | null> => {
  const trainee = await Trainee.findById(traineeId);
  if (!trainee) return null; 

  trainee.bookedClasses = trainee.bookedClasses.filter(
    (id: string) => id.toString() !== classId,
  );
  return await trainee.save();
};
