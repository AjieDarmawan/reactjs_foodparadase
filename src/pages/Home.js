import React, { Component } from 'react'

import ImageAndWelcome from '../components/ImageAndWelcome'
import FeaturedCities from '../components/FeaturedCities'
import SearchCity from '../components/SearchCity'
import CityList from '../components/CityList'
import axios from 'axios'
import { API } from '../config/api'



class Home extends Component {
  constructor () {
    super()
    this.state = {
      keyword: '',
      featuredCities: null,
      citiesResultSearch: null,
      cityKeywordResult: ''
    }
  }

  changeKeywordHandler = event => {
    this.setState({ keyword: event.target.value })
  }

  searchHendler = () => {
    let keyword = this.state.keyword
    var url = `${API.zomato.base_url}/cities`
    axios
      .get(url, {
        headers: {
          'user-key': "a281a542ac304ba962aa5a8bd413c73d"
        },

        params: {
          q: keyword
        }
      })
      .then(({ data }) => {
        if ((data.success = 'success')) {
          this.setState({
            citiesResultSearch: data.location_suggestions,
            keyword: '',
            cityKeywordResult: keyword
          })
        }
      })
      .catch(err => console.log(err))
  }

  getFeaturedCities = () => {
  
   var url = `${API.zomato.base_url}/cities`
    axios
      .get(url, {
        headers: {
          'user-key': "a281a542ac304ba962aa5a8bd413c73d"
        },

        params: {
          city_ids: '74,11052,170'
        }
      })
      .then(({ data }) => {
        if (data.status === 'success') {
          this.setState({ featuredCities: data.location_suggestions })
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount () {
    this.getFeaturedCities()
    console.log(API);
  }

  render () {
    // const citiesDummy = [
    //   { id: 72, name: 'Jakarta', country_name: 'Indonesia' },
    //   { id: 11052, name: 'Bandung', country_name: 'Indonesia' },
    //   { id: 170, name: 'Bali', country_name: 'Indonesia' }
    // ]
    return (
      <>
        <ImageAndWelcome />
        <div className='container' style={{ marginTop: 30, marginBottom: 30 }}>
          <CityList
            cities={this.state.featuredCities}
            title={'Featured Cities'}
          />
          <SearchCity
            value={this.state.keyword}
            onChange={this.changeKeywordHandler}
            onClickSearch={this.searchHendler}
          />

          {this.state.cityKeywordResult !== '' && (
            <CityList
              title={'Search Result'}
              showSubtitle={true}
              subtitle={this.state.cityKeywordResult}
              cities={this.state.citiesResultSearch}
            />
          )}
        </div>
      </>
    )
  }
}

export default Home
