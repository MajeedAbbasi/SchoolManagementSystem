import React from "react";
import Navbar from "./assets/components/Navbar/Navbar";
import Header from "./assets/components/Header/Header";
import Admin from "./assets/components/Pages/Dashboard/Admin";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AllStudents from "./assets/components/Pages/Students/AllStudents";
import StudentDetail from "./assets/components/Pages/Students/StudentDetail";
import AdmitionForm from "./assets/components/Pages/Students/AdmitionForm";
import AllTeachers from "./assets/components/Pages/Teachers/AllTeachers";
import TeacherDetail from "./assets/components/Pages/Teachers/TeacherDetail";
import AddTeacher from "./assets/components/Pages/Teachers/AddTeacher";
import Parents from "./assets/components/Pages/Parents/Parents";
import AddBook from "./assets/components/Pages/Library/AddBook";
import Allbooks from "./assets/components/Pages/Library/Allbooks";
import FeeCollection from "./assets/components/Pages/Payment/FeeCollection";
import CreateStudentPayment from "./assets/components/Pages/Payment/CreateStudentPayment";
import AllExpenses from "./assets/components/Pages/Payment/AllExpenses";
import AddExpenses from "./assets/components/Pages/Payment/AddExpenses";
import Subject from "./assets/components/Pages/Subject/Subject";
import ClassRoutine from "./assets/components/Pages/Class Routine/ClassRoutine";
import ExamSchedule from "./assets/components/Pages/Exam/ExamSchedule";
import Notice from "./assets/components/Pages/Notice/Notice";
import Message from "./assets/components/Pages/Message/Message";
import Map from "./assets/components/Pages/Map/Map";
import "animate.css";
import Account from "./assets/components/Pages/Accounts/Account";
import SignUpLogin from "./assets/components/Pages/Login/SignUpLogin";
import Protected from "./Protected";
import { useSelector } from "react-redux";
const App = () => {
  const access = useSelector((state) => state.AccessSlice.access);

  return (
    <BrowserRouter>
      <div className=" flex">
        {access.type === true ? (
          <>
            <Navbar />
            <div className="lg:ml-[200px] w-auto h-full">
              <div>
                <Header />
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="relative  w-full h-[40rem] pt-3 animate__animated  bg-gray-300">
          <Routes>
            <Route path="/" element={<SignUpLogin />} />
            <Route element={<Protected />}>
              <Route path="/dashboard" element={<Admin />} />
              <Route path="/students/allstudents" element={<AllStudents />} />
              <Route path="/students/detail" element={<StudentDetail />} />
              <Route path="/students/form" element={<AdmitionForm />} />
              <Route path="/teachers/allteachers" element={<AllTeachers />} />
              <Route path="/teachers/detail" element={<TeacherDetail />} />
              <Route path="/teachers/form" element={<AddTeacher />} />
              <Route path="/parents" element={<Parents />} />
              <Route path="/library/addbook" element={<AddBook />} />
              <Route path="/library/allbooks" element={<Allbooks />} />
              <Route
                path="/payment/feecollection"
                element={<FeeCollection />}
              />
              <Route
                path="/payment/createstudentpayment"
                element={<CreateStudentPayment />}
              />
              <Route path="/payment/allexpenses" element={<AllExpenses />} />
              <Route path="/payment/addexpenses" element={<AddExpenses />} />
              <Route path="/subject" element={<Subject />} />
              <Route path="/classroutine" element={<ClassRoutine />} />
              <Route path="/examschedule" element={<ExamSchedule />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/message" element={<Message />} />
              <Route path="/map" element={<Map />} />
              <Route path="/account" element={<Account />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
