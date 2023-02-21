import React from "react";
import {useFormik} from "formik";
import axios from "axios";
const App = () => {
  const formik = useFormik({
    initialValues: {
      url: ""
    },
    onSubmit: values => {
      console.log(values);

      axios.post("localhost:5000/newChapter/", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  });
  
  return (
  <form onSubmit={formik.handleSubmit}>
    <label htmlFor="url">Enter URL</label>
    <input
      id="url"
      name="url"
      type="url"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
    <button type="submit">Submit</button>
  </form>
  )
}

export default App;
