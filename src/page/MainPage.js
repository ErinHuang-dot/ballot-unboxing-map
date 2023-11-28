import Header from '../components/Header';
import Dashboard from '../layouts/Dashboard';
import styled from 'styled-components';
import { URL } from '../constants/FilePath';

export default function MainPage() {
  return (
    <>
      <Header />
      <div>
        <Dashboard />
      </div>
    </>
  )
}