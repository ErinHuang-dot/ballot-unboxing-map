import styled from 'styled-components';
import PortionBar from '../components/PortionBar';

export default function Dashboard() {
  const DashboardTitle = styled.h2`
    margin-top: 2rem;
    margin-bottom: 0.75rem
  `
  const TopWrapper = styled.div`
    background-color: hsl(180, 4%, 95%);
    border-radius: 0.75rem;
  `

  return(
    <>
      <DashboardTitle className='fs-3'>全臺縣市總統得票</DashboardTitle>
      <TopWrapper className='pt-4 pb-3 px-3'>
        <h3 className='fs-5 mb-3'>總統得票數</h3>
        <PortionBar />
      </TopWrapper>
    </>
  )
}