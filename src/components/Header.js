import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';
import { MEDIA_QUERY_LG } from '../constants/Breakpoints';
import { URL } from '../constants/FilePath';
import data from '../data/data.json';

export default function Header() {
  const LogoWrapper = styled.div`
    h1 {
      font-family: 'Dela Gothic One', sans-serif;
    }
    img {
      width: 52px;
      height: 32px;
    }
  `
  const FormSelect1 = styled(Form.Select)`
    font-family: 'Roboto',sans-serif;
    
    ${MEDIA_QUERY_LG} {
      flex: 1 0 120px;
    }
  `
  const FormSelect2 = styled(Form.Select)`
    ${MEDIA_QUERY_LG} {
      flex: 1 0 194px;
    }
  `
  const FormSelect3 = styled(Form.Select)`
    ${MEDIA_QUERY_LG} {
      flex: 1 0 194px;
    }
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
    <header className='d-flex align-items-center px-4 py-3'>
      <LogoWrapper className='d-flex me-4'>
        <img src={URL + '/images/logo.png'} alt='logo' className='me-2'/>
        <h1 className='fs-3 fw-normal mb-0'>台灣歷年總統 都幾？</h1>
      </LogoWrapper>
      <div className='d-flex align-items-center'>
        <p className='fw-bold me-2 mb-0 flex-lg-shrink-0'>選擇年份</p>
        <FormSelect1 
          aria-label='Default select example'
          className='bg-body-secondary rounded-pill px-3 py-2 me-3'>
          { NewYearArr.map((item, i) => (
            <option value={ item } key={ item + i }>{ item }</option>
          ))}
        </FormSelect1>
        <InputGroup>
          <InputGroup.Text 
            className='bg-body-secondary rounded-start-pill border-end-0 px-3 py-2'>
            <span className='material-symbols-outlined'>search</span>
          </InputGroup.Text>
          <FormSelect2 
            aria-label='Default select example'
            className='bg-body-secondary border-start-0 px-3 py-2'>
            <option>全部縣市</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </FormSelect2>
          <FormSelect3 
            aria-label='Default select example'
            className='bg-body-secondary rounded-end-pill px-3 py-2'>
            <option>選擇區域</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </FormSelect3>
        </InputGroup>
      </div>
      <SocialIconList className='flex-grow-1 d-flex justify-content-end align-items-center mb-0'>
        <li>分享</li>
        { data.Header.socialIcon.map((item,i)=> (
          <li key={item.title + i}>
            <a href='#' title={`分享至${item.title}(另開新視窗)`}>
              <img src={ URL + item.img } alt={ item.title }/>
            </a>
          </li>
        ))}
      </SocialIconList>
    </header>
  )
}