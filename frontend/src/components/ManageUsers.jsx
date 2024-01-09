import styled from 'styled-components';

const ManageUsersContainer = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
    height: 100%;
    margin: 20px 0;

    h2 {
        font-size: 40px;
        font-weight: 700;
        margin-right: 10px;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        margin-left: 10px;
    }
    
`;

const ManageUsers = () => {
  return (
    <ManageUsersContainer>
    <h2>Manage Users</h2>
    <p>Coming soon!</p>
    </ManageUsersContainer>
  );
};

export default ManageUsers;
