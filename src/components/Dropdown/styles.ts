import styled from "styled-components";



export const Button = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  width: 400px;

  
  .container {
    width: 100%;
    height: 100vh;
  }

  .dropdown {
    width: 400px;
    margin: 100px auto;
  }

  .dropdown .dropdown-btn {
    padding: 15px 20px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dropdown .dropdown-content {
    position: absolute;
    top: 110%;
    padding: 15px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    
  }
`;