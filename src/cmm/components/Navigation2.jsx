import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate()


  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={()=>navigate("/home")} label="홈"/>
        <BottomNavigationAction onClick={()=>navigate("/counter")} label="카운터"/>
        <BottomNavigationAction onClick={()=>navigate("/todos")} label="일정"/>
        <BottomNavigationAction onClick={()=>navigate("/signup")} label="회원가입"/>
        <BottomNavigationAction onClick={()=>navigate("/login")} label="로그인"/>
        <BottomNavigationAction onClick={()=>navigate("/stroke")} label="뇌졸중"/>
        <BottomNavigationAction onClick={()=>navigate("/iris")} label="붓꽃 분류"/>
      </BottomNavigation>
    </Box>
  );
}