const ProgressBar = ({current, total}) => {
    const progress = Math.round((current / total) * 100);


return  (
    <div style= {{margin: "20px 0"}}>
         <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
        Progress: {progress}% 
      </p>

    <div style={{background: "#ccc", borderRadius: "10px", height: "15px" }}>

        <div style = {{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#003166",
        
          }}  />
    </div>
    </div>
);
};
export default ProgressBar;