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
import { useDispatch } from 'react-redux';
import { addProject } from './State Management/Features/Project/ProjectSlice.js';
import { addSkill } from './State Management/Features/Skill/SkillSlice.js';
import { useEffect } from 'react';
import getCookie from './hooks/getCookie.js';
import Wrapper from "./Components/Wrapper";
import AdminPage from "./Page/AdminPage";
import { addUser } from "./State Management/Features/User/UserSlice";
import { projectData } from './data.js';
import { skillData } from "./data.js";

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    const getProduct = async () => {
      dispatch(addProject(projectData));
    }
    getProduct();
  }, []);

  useEffect(() => {
    const getData = async () => {

      dispatch(addSkill(skillData));
    }
    getData();
  }, []);

  useEffect(() => {
    const token = getCookie("user")
    dispatch(addUser(token === undefined ? null : token));
  },);


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
