import styled from 'styled-components';
import summary from '../data/summary.json';
import { URL } from '../constants/FilePath';

export default function PortionBar() {
  const PortionBarWrapper = styled.div`
    border-radius: 0.75rem;
    padding-block: 1.875rem;
  `
  const CandidateList = styled.ul`
    li:not(:last-of-type) {
      margin-right: 2.5rem;
    }
    img {
      margin-right: 0.75rem;
    }
    span {
      color: var(--text-secondary);
    }
  `

  return (
    <PortionBarWrapper className='px-4'>
      <CandidateList className='d-flex'>
        { summary.overview.candidates.map(( item, i ) => (
          <li key={ item.getVotes + i} className='d-flex'>
            <img src={ URL + item.img} alt={ item.name }/>
            <div>
              <span><small>{ item.party }</small></span>
              <h4 className='fs-6 fw-normal' isWin>
                { item.name }
                <span>
                  { item.isWin ? 
                  <img src={ URL + '/images/badge.png'} alt='' className='ms-1'/>: "" }
                </span>
              </h4>
              <h5 className='fs-6'>{ item.getVotes + `票` }</h5>
            </div>
          </li>
        ))}
      </CandidateList>
    </PortionBarWrapper>
  )
}