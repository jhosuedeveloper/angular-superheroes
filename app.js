/* global angular */
(function(){



  angular
  .module('superHero', [])
  .factory('HerosFactory', [heroService])
  .controller('HerosController', ['HerosFactory', HerosController])
  .controller('HerosFormController', ['HerosFactory', HerosFormController])






  function heroService(){

    const heros = [
      {name: "SUPERMAN", phone_number:"703-222-0001", comics_affiliation: "BLUE", img_url:"https://static.comicvine.com/uploads/scale_small/8/80111/5766160-actioncomics976-gary-frank.jpg"},
      {name: "BATMAN", phone_number:"703-222-0002", comics_affiliation: "YELLOW", img_url:"https://static.comicvine.com/uploads/scale_small/3/31666/5481227-asbm_1_dir_cut_57d89cbee0e113.09132512.jpg"},
      {name: "SPIDER-MAN", phone_number:"703-222-0003", comics_affiliation: "BROWN", img_url:"https://static.comicvine.com/uploads/scale_small/3/31666/4688877-asm2015002cov-288e0.jpg"},
      {name: "THOR", phone_number:"703-222-0004", comics_affiliation: "GRAY", img_url:"https://static.comicvine.com/uploads/scale_small/3/31666/5396930-thorunworth2016001-cov-38b58.jpg"},
      {name: "HAL JORDAN", phone_number:"703-222-0005", comics_affiliation: "ORANGE", img_url:"https://static.comicvine.com/uploads/scale_small/3/31666/3703047-secret_origins_3_531f5d9ec45806.60423727.jpg"}
    ]


    return {
      all: all,
      create: create
    }

    function all () {
      return heros
    }

    function create(newHero){
      heros.push({name: newHero.name, phone_number: newHero.phoneNumber, comics_affiliation: newHero.comics_affiliation , img_url: newHero.img_url})

    }

  }//END OF heroService function





  function HerosController (HerosFactory) {
    this.heros = HerosFactory.all()
    this.showHero = function (hero) {
      console.log(hero)
      this.heroDisplay = hero.img_url
      console.log(this.heroDisplay)
    }
  }


  function HerosFormController (HerosFactory) {
    this.addHero= addHero

      function addHero(){
        HerosFactory.create(this.newHero)
        this.newHero = {}
      }
  }





})()// end of function
