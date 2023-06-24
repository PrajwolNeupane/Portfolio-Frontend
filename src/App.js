import NavBar from "./Components/NavBar";
import NavProject from "./Components/NavProject";
import AboutPage from "./Page/AboutPage";
import ContactPage from "./Page/ContactPage";
import HomePage from "./Page/HomePage";
import SkillPage from "./Page/SkillPage";
import WorkPage from "./Page/WorkPage";
import { Routes, Route } from 'react-router-dom';
import SingleProject from "./Page/SingleProject";
import LogInPage from "./Page/LogInPage";
import { useSelector, useDispatch } from 'react-redux';
import { addProject } from './State Management/Features/Project/ProjectSlice.js';
import { addSkill } from './State Management/Features/Skill/SkillSlice.js';
import { addMessage } from './State Management/Features/Message/MessageSlice.js';
import { useEffect } from 'react';
import getCookie from './hooks/getCookie.js';
import axios from 'axios';
import Wrapper from "./Components/Wrapper";
import AdminPage from "./Page/AdminPage";
import { addUser } from "./State Management/Features/User/UserSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {

      try {
        const res = await axios.get(`${process.env.REACT_APP_API}project/?api_key=${process.env.REACT_APP_API_KEY}`);
        dispatch(addProject(res.data));
      } catch (e) {
        console.log(e);
      }
 

    }
    getProduct();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}skill/?api_key=${process.env.REACT_APP_API_KEY}`);
        dispatch(addSkill(res.data));
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const token = getCookie("user")
    dispatch(addUser(token === undefined ? null : token));
  },);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}message/?api_key=${process.env.REACT_APP_API_KEY}`);
        dispatch(addMessage(res.data));
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <HomePage />
            <AboutPage />
            <SkillPage />
            <WorkPage />
            <ContactPage />
          </>
        } />
        <Route path="/:id" element={
          <>
            <NavProject />
            <SingleProject />
          </>
        } />
        <Route path="/admin" element={
          <Wrapper authChild={<AdminPage />} noAuthChild={<LogInPage />} />
        } />
      </Routes>
    </>
  );
}

export default App;
