import styled from 'styled-components';
import { URL } from '../constants/FilePath';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../constants/Breakpoints';
import data from '../data/data.json';

export default function HomePage() {
  const LogoWrapper = styled.div`
    h1 {
      font-family: 'Dela Gothic One', sans-serif;
      font-weight: 400;
      font-size: 2rem;
      line-height: 1.5;

      ${ MEDIA_QUERY_LG } {
        font-size: 3.75rem;
      }
    }

    img {
      width: 138px;
      height: auto;
    }
  `
  const SearchWrapper = styled.div`
    max-width: 924px;

    p {
      color: var(--primary);
    }

  `
  const LinkWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    ${ MEDIA_QUERY_MD } {
      grid-template-columns: repeat(3, 1fr);  
    }

    ${ MEDIA_QUERY_LG } {
      grid-template-columns: repeat(5, 1fr);      
    }
    a {
      padding: 0.75rem 4.25rem;
      font-family: 'Roboto',sans-serif;
      border: 2px solid transparent;

      &:hover {
        color: var(--primary);
        border: 2px solid var(--primary);
      }
    }
  `
  const RoleList = styled.ul`
    bottom: -1.75rem;

    li {
      min-width: 98px;

      ${ MEDIA_QUERY_LG } {
        min-width: 280px;
      }
    }
  `

  return (
    <section className='container-fluid vh-100 position-relative'>
      <div className='pt-5'>
        <LogoWrapper className='text-center mt-5'>
          <img src={URL + '/images/logo.png'} alt='logo' />
          <h1>台灣歷年總統 都幾？</h1>
        </LogoWrapper>
        <SearchWrapper className='mx-auto mt-4 text-center'>
          <p className='mb-4 fs-4 fw-bold'>選擇查詢年份</p>
          <LinkWrapper>
            { data.Home.searchYear.map((item, i) => (
              <a href='/main' title={`搜尋年份${item}`} key={ item + i}
              className='fw-bold bg-body-secondary rounded-pill'>{ item }</a>
            ))}
          </LinkWrapper>
        </SearchWrapper>
      </div>
      <RoleList className='d-flex overflow-hidden position-absolute'>
        { data.Home.roles.map(item => (
          <li className='me-5'>
            <img src={ URL + item.img} alt={data.title}/>
          </li>
        ))}
      </RoleList>
    </section>
  )
}