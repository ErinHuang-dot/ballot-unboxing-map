import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../constants/Breakpoints';
import { URL } from '../constants/FilePath';
import data from '../data/data.json';

export default function Header() {
  const Header = styled.header`
    border-bottom: 1px solid var(--line-color);
  `
  
  const LogoWrapper = styled.div`
    h1 {
      font-family: 'Dela Gothic One', sans-serif;
      font-size: 1.25rem;

      ${MEDIA_QUERY_MD} {
        font-size: 1.75rem;
      }
    }
    img {
      width: 38px;
      height: 24px;

      ${MEDIA_QUERY_MD} {
        width: 52px;
        height: 32px;
      }
    }
  `
  const FormSelect1 = styled(Form.Select)`
    font-family: 'Roboto',sans-serif;
    font-size: 0.875rem;
    padding: 0.25rem 0.75rem;
    width: 76px;
    
    ${MEDIA_QUERY_MD} {
      font-size: 1rem;
      width: 120px;
    }
  `
  const FormSelect2 = styled(Form.Select)`
    padding: 0.25rem 0.75rem;
    border-radius: 50% 0 0 50%;
    ${MEDIA_QUERY_MD} {
      border-radius: 0;
      max-width: 194px;
    }
  `
  const FormSelect3 = styled(Form.Select)`
    padding: 0.25rem 0.75rem;

    ${MEDIA_QUERY_MD} {
      max-width: 194px;
    }
  `
  const InputGroupWrapper = styled(InputGroup)`
    flex-wrap: nowrap;
  `

  const SocialIconList = styled.ul`
    li:not(:last-of-type) {
      margin-right: 1rem;
    }
  `
  
  let NewYearArr = data.Home.searchYear.sort(function(a,b) {
    return b - a;
  })

  return (
    <Header className='d-flex flex-wrap flex-md-nowrap align-items-center px-4 py-3'>
      <LogoWrapper className='flex-shrink-0 d-flex me-4'>
        <img src={URL + '/images/logo.png'} alt='logo' className='me-2'/>
        <h1 className='fw-normal mb-0'>台灣歷年總統 都幾？</h1>
      </LogoWrapper>
      <div className='flex-shrink-0 d-flex align-items-center me-md-3'>
        <p className='fw-bold me-2 mb-0 d-none d-block flex-shrink-0'>選擇年份</p>
        <FormSelect1 
          aria-label='Default select example'
          className='bg-body-secondary rounded-pill px-md-3 py-md-2'>
          { NewYearArr.map((item, i) => (
            <option value={ item } key={ item + i }>{ item }</option>
          ))}
        </FormSelect1>
      </div>
      <InputGroupWrapper className='mt-3 mt-md-0'>
        <InputGroup.Text 
          className='d-none d-md-block bg-body-secondary rounded-start-pill border-end-0 px-3 py-2'>
          <span className='material-symbols-outlined'>search</span>
        </InputGroup.Text>
        <FormSelect2 
          aria-label='Default select example'
          className='bg-body-secondary px-md-3 py-md-2'>
          <option>全部縣市</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </FormSelect2>
        <FormSelect3 
          aria-label='Default select example'
          className='bg-body-secondary rounded-end-pill px-md-3 py-md-2'>
          <option>選擇區域</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </FormSelect3>
      </InputGroupWrapper>
      <SocialIconList className='d-none flex-lg-grow-1 flex-lg-shrink-0 d-lg-flex justify-content-end align-items-center mb-0'>
        <li>分享</li>
        { data.Header.socialIcon.map((item,i)=> (
          <li key={item.title + i}>
            <a href='#' title={`分享至${item.title}(另開新視窗)`}>
              <img src={ URL + item.img } alt={ item.title }/>
            </a>
          </li>
        ))}
      </SocialIconList>
    </Header>
  )
}