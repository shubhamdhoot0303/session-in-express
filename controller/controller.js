class StudentController{
    static  get_session_info=(req,res) =>{
        res.send("session created");
        console.log(req.session)
        console.log(req.session.id)
        console.log(req.session.cookie.username)
    }
    static  set_session_info=(req,res) =>{
        res.send("session created");
        console.log("session set..")
    }
    static  delete_session_info=(req,res) =>{
                req.session.destroy(()=>{
            console.log("session delete..")
        })
        res.send("session deleted");
           }
}
export default StudentController;