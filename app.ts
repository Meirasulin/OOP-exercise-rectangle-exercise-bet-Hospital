class Person {
  firstName: string;
  lestName: string;
  constructor(firstName: string, lestName: string) {
    this.firstName = firstName;
    this.lestName = lestName;
  }
}
class Patient extends Person {
  patientID: number;
  constructor(firstName: string, lestName: string, patientID: number) {
    super(firstName, lestName);
    this.patientID = patientID;
  }
  patientDetails() {
    return {
      "first name": this.firstName,
      "lest name": this.lestName,
      "patient ID": this.patientID,
    };
  }
}
class Doctor extends Person {
  doctorID: number;
  specialization: string;
  constructor(
    firstName: string,
    lestName: string,
    doctorID: number,
    specialization: string
  ) {
    super(firstName, lestName);
    this.doctorID = doctorID;
    this.specialization = specialization;
  }
  doctorDetails() {
    return {
      "first name": this.firstName,
      "lest name": this.lestName,
      "doctor ID": this.doctorID,
      specialization: this.specialization,
    };
  }
}
class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }
  appointmentDetails() {
    return {
      "patient Details": this.patient.patientDetails(),
      "doctor Details": this.doctor.doctorDetails(),
      "appointment date": this.date,
      "appointment time": this.time,
    };
  }
}
class Hospital {
  hospitalName: string;
  patient: Patient[];
  doctor: Doctor[];
  appointment: Appointment[];
  constructor(hospitalName: string) {
    this.hospitalName = hospitalName;
    this.patient = [];
    this.doctor = [];
    this.appointment = [];
  }
  addPatient(newPatient: Patient) {
    this.patient.push(newPatient);
  }
  addDoctor(newDoctor: Doctor) {
    this.doctor.push(newDoctor);
  }
  addAppointment(newAppointment: Appointment) {
    this.appointment.push(newAppointment);
  }
  showAllAppointment() {
    return this.appointment;
  }
  showAppointmentByDoctorID(idOfDoctor: number) {
    const AppointmentOfDoctor = this.appointment.find(
      (appo) => appo.doctor.doctorID === idOfDoctor
    );
    if (!AppointmentOfDoctor) return "no appointment to this doctor";
    return AppointmentOfDoctor;
  }

  showAppointmentByPatientID(IdOfPatient: number) {
    const AppointmentOfPatient = this.appointment.find(
      (appo) => appo.patient.patientID === IdOfPatient
    );
    if (!AppointmentOfPatient) return "no appointment to this Patient";
    return AppointmentOfPatient;
  }
  toDayAppointment(date: string) {
    const AppointmentOfToday = this.appointment.find(
      (appo) => appo.date === date
    );
    if (!AppointmentOfToday) return "no appointments today";
    return AppointmentOfToday;
  }
}
const myPatient1 = new Patient("shula1", "shulavith1", 1);
const myPatient2 = new Patient("shula2", "shulavith2", 2);
const myPatient3 = new Patient("shula3", "shulavith3", 3);
const myPatient4 = new Patient("shula4", "shulavith4", 4);
const myPatient5 = new Patient("shula5", "shulavith5", 5);

const myDoctor1 = new Doctor("viktor1", "gargamel1", 11, "surgery1");
const myDoctor2 = new Doctor("viktor2", "gargamel2", 22, "surgery2");
const myDoctor3 = new Doctor("viktor3", "gargamel3", 33, "surgery3");
const myDoctor4 = new Doctor("viktor4", "gargamel4", 44, "surgery4");
const myDoctor5 = new Doctor("viktor5", "gargamel5", 55, "surgery5");

const myAppointment1 = new Appointment(
  myPatient1,
  myDoctor1,
  "27/08/23",
  "14:00"
);
const myAppointment2 = new Appointment(
  myPatient2,
  myDoctor2,
  "28/08/23",
  "13:00"
);
const myAppointment3 = new Appointment(
  myPatient3,
  myDoctor3,
  "29/08/23",
  "12:00"
);
const myAppointment4 = new Appointment(
  myPatient4,
  myDoctor4,
  "27/08/23",
  "15:00"
);
const myAppointment5 = new Appointment(
  myPatient5,
  myDoctor5,
  "30/08/23",
  "11:00"
);

const myHospital = new Hospital("hadasa");
myHospital.addAppointment(myAppointment1);
myHospital.addAppointment(myAppointment2);
myHospital.addAppointment(myAppointment3);
myHospital.addAppointment(myAppointment4);
myHospital.addAppointment(myAppointment5);
const showAllAppointment = myHospital.showAllAppointment();
console.log(showAllAppointment);
const showAppointmentByDoctorID = myHospital.showAppointmentByDoctorID(22);
console.log(showAppointmentByDoctorID);
const showAppointmentByPatientID = myHospital.showAppointmentByPatientID(5);
console.log(showAppointmentByPatientID);
const toDayAppointment = myHospital.toDayAppointment("27/08/23");
console.log(toDayAppointment);
