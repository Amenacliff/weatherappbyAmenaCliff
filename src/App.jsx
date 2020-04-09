import React, { Component } from 'react'
import './App.css'

const api ={
  key:'b886d91ed20a7a3a8c7da2e836e7a97e',
  base: 'https://api.openweathermap.org/data/2.5/'
}

export class App extends Component {
  constructor(){
    super()
    this.state = {
      query :'',
      weather : {},
      tempreture : '',
      slug :''
    }
  }
  
  callApi = (event)=>{
    const {query} = this.state
    if(event.key === 'Enter'){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(res=>res.json())
  .then(result=>{
    const temp = result.main.temp
    const slug = result.sys.  country 
    this.setState({
      weather : result,
      tempreture : temp,
      query : '',
      slug: slug
    })
  })
}
  }

  cityTyped =(event)=>{
    this.setState({
      query : event.target.value.toLowerCase()
    })
  }


  render() {
    const {slug, tempreture , weather} = this.state
    return (
      <div className={(typeof tempreture != 'undefined') ? ((tempreture  > 16 )? 'appwarm' : 'app') :'app'}>
        {/* {tempreture < 16 ? 'app' : 'appwarm'} */}
        <input className='input'  onChange ={this.cityTyped} onKeyPress ={this.callApi} type='text' placeholder='Search.... City'/><br></br><br/><br/><br/>
<p style={{color:'white', fontSize:'60px',}}>{weather.name } , {slug}</p><br/><br/><br/><br/>
<div className='temp-box'>
    <h1  className='temp' style={{color:'white', fontSize:'100px', textAlign:'center'}}>{Math.round(tempreture)+'°C'}</h1>
    </div><br/><br/><br/>

    <h2 style ={{color:'white', fontSize:'50px'}}> {tempreture > 16 ? 'Warm /  Hot':'Cold'}</h2>
</div>
    )
  }
}

export default App
