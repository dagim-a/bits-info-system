import imgs2 from '../assets/img2.png';
import imgs8 from '../assets/img1.1.jpg';
// import imgs7 from '../assets/im1.png';

function registrar(){
    return(
        <>
        <div style={{display:"flex", justifyContent:"space-between", }}>
        <div style={{width:"22%", backgroundColor:"black"}}>
            <div style={{display:"flex",flexDirection:"row", gap:"4px"}}>
            
                <div><img src={imgs2} alt="" style={{width:"60PX", margin:"10px"}}/></div>
                <div>
                <h1 style={{color:"white",marginTop:"7px"}}>BITS-SIS</h1>
                <p style={{color:"white",display:"flex" ,marginTop:"-24px"}}>@registrar</p></div>
                
            </div>
            <div>
            <hr style={{backgroundColor:"white",height:"0.8px", marginTop:"-7px",border:"none"}}/>
            <p style={{color:"white", fontSize:"20px", marginLeft:"20px"}}>Calender Management</p>
            
            <button style={{backgroundColor:"green", color:"white",fontSize:"20px", width:"100%", textAlign:'left',height:"50px"}}>Academic Time Line</button>
            
            </div>
            <div>
                <p style={{color:"white", fontSize:"20px", marginLeft:"20px",marginTop:"50px"}}>Student Records</p>
                <button style={{backgroundColor:"green",width:"100%",color:"white",fontSize:"20px", textAlign:"left",height:"50px"}}>Student Grades</button>
                <button style={{backgroundColor:"green",width:"100%",color:"white",fontSize:"20px", textAlign:"left",marginTop:"10px",height:"50px"}}>Course Eligibility</button>
                <button style={{backgroundColor:"green",width:"100%",color:"white",fontSize:"20px", textAlign:"left",marginTop:"10px",height:"50px"}}>Student Promotion</button>


            </div>
            <div>
                <p style={{color:"white", fontSize:"20px", marginLeft:"20px",marginTop:"50px"}}>Student Financial Records</p>
                <button style={{backgroundColor:"green",width:"100%",color:"white",fontSize:"20px", textAlign:"left",marginTop:"10px",height:"50px"}}>Credit Hour Rate</button>
                <button style={{backgroundColor:"green",width:"100%",color:"white",fontSize:"20px", textAlign:"left",marginTop:"10px",height:"50px"}}>Payment Information</button>
                            
            </div>
            <div>
                <button style={{backgroundColor:"red",width:"100%",color:"white",fontSize:"20px",textAlign:"left",marginTop:"175px",height:"50px"}}>Logout</button>
            </div>
        </div>


        <div style={{width:"78%", backgroundColor:"white"}}>
            <dev>
            <h1 style={{color:"black",marginLeft:"40px"}}>Registrar Dashboard</h1>
            <div>
                <h1 style={{backgroundColor:"orange",width:"4%",color:"white",fontSize:"30px",marginLeft:"960px", marginTop:"-54px",borderRadius:"100%"}}> DA</h1>
                <h1 style={{fontSize:"22px",marginTop:"-70px",textAlign:"right"}}>Dagim Adgolign</h1>
                 <p style={{marginRight:"50px",textAlign:"right",marginTop:"-5px"}}>Registrat Office</p>
                 </div>
            <hr style={{backgroundColor:"black",height:"2px",marginTop:"-4px",border:"none"}}/></dev>
            <h1 style={{fontSize:"20px",marginLeft:"40px"}}>Financial Report for 2023</h1>
           
           
            <div style={{display:"flex",flexDirection:"row"}}>
                <div >
                     <p style={{marginLeft:"50px"}}>Active users</p>
                     <div style={{flexDirection:"row",display:"flex"}}>
                     <h1 style={{marginLeft:"50px",marginTop:"-1px"}}>235 </h1>
                     <h1 style={{marginLeft:"5px",marginTop:"10px" , fontSize:"18px"}}>Total Users</h1>
                     </div>

                   </div>
                   <div style={{marginLeft:"100px"}}>
                     <p style={{marginLeft:"50px"}}>Undergraduate</p>
                     <div style={{flexDirection:"row",display:"flex"}}>
                     <h1 style={{marginLeft:"50px",marginTop:"-1px"}}>180 </h1>
                     <h1 style={{marginLeft:"5px",marginTop:"10px" , fontSize:"18px"}}>Total Users</h1>
                     </div>
                      </div>
                      <div style={{marginLeft:"100px"}}>
                      <p style={{marginLeft:"50px"}}>Post Graduate</p>
                     <div style={{flexDirection:"row",display:"flex"}}>
                     <h1 style={{marginLeft:"50px",marginTop:"-1px"}}>55 </h1>
                     <h1 style={{marginLeft:"5px",marginTop:"10px" , fontSize:"18px"}}>Total Users</h1>
                     </div>
                      </div>
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div>
                    <p style={{marginLeft:"50px"}}>Full Installment <br/> Complete</p>
                    <div style={{flexDirection:"row",display:"flex"}}>
                     <h1 style={{marginLeft:"50px",marginTop:"-1px"}}>105 </h1>
                     <h1 style={{marginLeft:"5px",marginTop:"10px" , fontSize:"18px"}}>Total Users</h1>
                     </div>

                </div>
                <div style={{marginLeft:"100px"}}>
                    <p style={{marginLeft:"50px"}}>First Installment <br/> Complete</p>
                    <div style={{flexDirection:"row",display:"flex"}}>
                     <h1 style={{marginLeft:"50px",marginTop:"-1px"}}>95 </h1>
                     <h1 style={{marginLeft:"5px",marginTop:"10px" , fontSize:"18px"}}>Total Users</h1>
                     </div>

                </div>
                <div style={{marginLeft:"100px"}}>
                    <p style={{marginLeft:"50px"}}>Incomplete <br/> Payment</p>
                    <div style={{flexDirection:"row",display:"flex"}}>
                     <h1 style={{marginLeft:"50px",marginTop:"-1px"}}>35 </h1>
                     <h1 style={{marginLeft:"5px",marginTop:"10px" , fontSize:"18px"}}>Total Users</h1>
                     </div>

                </div>
            </div>
            <div style={{width:"100vh",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div >
                <h1 style={{fontSize:"25px",marginLeft:"50px"}}>Recent Actions</h1>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{fontSize:"18px"}}>Uploaded student grades for 2023 semester 1</h1>
                    <p style={{marginTop:"-15px"}}>Thu, 28,2023</p>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{fontSize:"18px"}}>Uploaded student grades for 2022 semester 2</h1>
                    <p style={{marginTop:"-15px"}}>Thu, 25,2023</p>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{fontSize:"18px"}}>Edited student grade for UGR/SWE/0001/21</h1>
                    <p style={{marginTop:"-15px"}}>Thu, 23,2023</p>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{fontSize:"18px"}}>Added student grade for UGR/SWE/0001/21</h1>
                    <p style={{marginTop:"-15px"}}>Thu, 23,2023</p>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{fontSize:"18px"}}>Deleted student gradefor UGR/SWE/0001/21</h1>
                    <p style={{marginTop:"-15px"}}>Thu, 22,2023</p>
                </div>
            </div>
<div style={{marginTop:"-140px",marginRight:"-470px"}} ><img src={imgs8} alt="" style={{width:"400PX", alignItems:"right"}}/></div>
            </div>
        </div>






        </div>
        </>
    )

}
export default registrar