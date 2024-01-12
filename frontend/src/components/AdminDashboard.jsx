
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 50px;
  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

const AdminNavBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');

    // Navigate the user back to the login page
    navigate('/login');
  };

  return (
    <nav>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};
  

const AdminDashboard = () => {
  return (
    <DashboardContainer>
      <AdminNavBar />
    </DashboardContainer>
  );
}

export default AdminDashboard;
