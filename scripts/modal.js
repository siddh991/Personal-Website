$(document).ready(function() {
  // MODAL
  var modalText = {
    evosim: {
      title: 'Evolution Simulator',
      tag: 'Python / PyGame',
      detail:
        'Evolution Simulator generates AI bots that eat food and produce offspring by applyinh the NeuroEvolution of Augmenting Topologies (NEAT) algorithm. The simulator employs techniques of natural selection to produce bots with improving pathfinding traits at each generation.',
      link: 'https://github.com/siddh991/Evolution-Simulator'
    },
    stock: {
      title: 'Reinforcement Learning Stock Trader',
      tag: 'Python / Keras',
      detail:
        'Reinforcement Learning Stock Trader is a Keras model which accurately predicts stock prices using historical pricing data and Twitter sentiment analysis.',
      link: 'https://github.com/siddh991/Reinforcement-Stock-Trader'
    },
    newrelic: {
      title: 'NewRelic.com',
      tag: 'APPLICATION PERFORMANCE MONITORING.',
      detail:
        'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
      link: 'http://www.newrelic.com'
    },
    bcd: {
      title: 'Breast Cancer Detector',
      tag: 'Python / Scikit-learn',
      detail:
        'Breast Cancer Detector is a Jupyter Notebook which cleans a breast cancer dataset and uses a Random Forest model to determine whether a tumour is benign or malignant.',
      link: 'http://www.roambi.com'
    },
    xplorer: {
      title: 'X-Plorer',
      tag: 'C# / Unity',
      detail:
        'X-Plorer is an open-world 3D game developed on the Unity game engine. The player is spawned in a randomly generated environment with varying climates, foliage, animals, etc. They must build tools, hunt prey and fight pirates to survive. '
    },
    powur: {
      title: 'Powur.com',
      tag: 'CONSUMER POWERED MARKETING.',
      detail:
        'Powur is a marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.',
      link: 'http://www.powur.com/with/42'
    },
    ultrabros: {
      title: 'UltraBros',
      tag: 'C# / XNA',
      detail:
        'A recreation of the retro game Super Mario Bros. with features such as combat with enemy AI, an inventory system, a leaderboard and more.'
    },
    never: {
      title: 'NeverSurrender',
      tag: 'ALS AWARENESS.',
      detail:
        'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
