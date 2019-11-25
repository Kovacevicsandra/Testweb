$(document).ready(function() {
					

		    $("#contents > div:gt(0)").hide();
			$("#right").click(next);
			$("#left").click(prev);
			
			
			var current = 0;
			
			var images = $("#contents").children();
			var imgsCount = images.length;
			
			function next(){
				images.eq(current).fadeOut(700);
				
				current = (current + 1) % imgsCount;

				images.eq(current).fadeIn(700);
					
			}

			function prev(){
				images.eq(current).fadeOut(700);
				
				current = (current - 1) % imgsCount;

				images.eq(current).fadeIn(700);
				
				
			}

			$('#intro-name').hide();
			setTimeout(function(){
				$('#intro-name').fadeIn(1000).delay(2500).fadeOut(1000);
				$('#intro-top').delay(4500).animate({height:'0px'}, 1000);
				$('#intro-bottom').delay(4500).animate({top:'100%'}, 1000);
			},1000);

		  
			$('.fadeIn').hide();
			setTimeout(function(){
				$('.fadeIn').fadeIn(1000);
			},7000); 
			
		
			$('#contact').hide();
			
			$('#mail').click(function(){
				
					$('#contact').fadeIn();
					$('.content').hide().delay(500).fadeIn();
					$(this).css('cursor','default');
				
			})

			$('#x').click(function(){
					$('#contact').fadeOut();
					$('#mail').css('cursor', 'pointer');
					if($('.box').val('')){
						$('.name').css({'transform': 'translateY(0px)', 'transition': 'transform 0.3s ease-in-out'});
						$('.name1').css({'transform': 'translateY(0px)', 'transition': 'transform 0.3s ease-in-out'});
					};
			})


			$('input[name=name]').focus(function(){
				$('#label1').css({'transform': 'translateY(-30px)', 'transition': 'transform 0.3s ease-in-out'});
			})

			$('input[name=email]').focus(function(){
				$('#label2').css({'transform': 'translateY(-30px)', 'transition': 'transform 0.3s ease-in-out'});
			})

			$('#text').focus(function(){
				$('#label3').css({'transform': 'translateY(-30px)', 'transition': 'transform 0.3s ease-in-out'});
			})



			$('input[name=name]').blur(function(){
				if(!$(this).val()){
			    	$('#label1').css({'transform': 'translateY(0px)', 'transition': 'transform 0.3s ease-in-out'});
			    }
			});

			$('input[name=email]').blur(function(){
				if(!$(this).val()){
			    	$('#label2').css({'transform': 'translateY(0px)', 'transition': 'transform 0.3s ease-in-out'});
			    }
			});

			$('textarea[name=message]').blur(function(){
				if(!$(this).val()){
			    	$('#label3').css({'transform': 'translateY(0px)', 'transition': 'transform 0.3s ease-in-out'});
			    	$('#text').animate({height: '30px'},500);
			    }
			});



			$('#label1').click(function(){
				$('input[name=name]').focus();
			})

			$('#label2').click(function(){
				$('input[name=email]').focus();
			})

			$('#label3').click(function(){
				$('textarea[name=message]').focus();
			})
			
			$('.name').click(function(){
				$(this).css({'transform': 'translateY(-30px)', 'transition': 'transform 0.3s ease-in-out'});
			})

			$('.name1').click(function(){
				$(this).css({'transform': 'translateY(-30px)', 'transition': 'transform 0.3s ease-in-out'});
				$('#text').animate({height: '200px'},500);
			})

			

			$('.submit').click(function(event){
				

				var name = $('#name').val();
				var email = $('#email').val();
				var message = $('#text').val();
				var statusElm =  $('.status');
				statusElm.empty();

				if(name === '' ){
					statusElm.append('<div>*Proverite da li su sva polja ispravno popunjena / Make sure all required fields are filled out correctly</div>');
				}
				
				else if(email === '' ){
					statusElm.append('<div>*Proverite da li su sva polja ispravno popunjena / Make sure all required fields are filled out correctly</div>');
				}

				else if(message === '' ){
					statusElm.append('<div>*Proverite da li su sva polja ispravno popunjena / Make sure all required fields are filled out correctly</div>');
				}


				else if(email.includes('@') && email.includes('.')){
					console.log('Email is valid');
				}

				else {

					statusElm.append('<div>*Proverite da li su sva polja ispravno popunjena / Make sure all required fields are filled out correctly</div>');
					event.preventDefault();
				}

				

			})

		});
