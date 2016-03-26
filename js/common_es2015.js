class CheckNuber {
	constructor($base){
		this.$base = $base;
		this.$input = this.$base.find('input');
		this.$trigger = this.$base.find('.jsc-check-number-count-trigger');
		this.$target = this.$base.find('.jsc-check-number-count-target');
		this.init();
	}
	init() {
		this.bindEvents();
	}
	bindEvents() {
		var _this = this;

		this.$input.click( function () {
			var value = $(this).val()
			alert(value + 'のinputがclickされました')
			_this.lengthConsole($(this));
		});

		this.$trigger.click( function () {
			var count = 0;
			_this.$input.each( function (){
				if($(this).prop('checked')) {
					count += 1;
				}
			});
			_this.outputText(count);
		});
	}
	lengthConsole($target) {
		var index = this.$input.index($target);
		console.log(index + 1 + '番目のinputがclickされました');
	}
	outputText(count) {
		if(count === 0 ){
			this.$target.text('checkはされていません')
		}else{
			this.$target.text(count + '個がcheckされています')
		}
	}
}

$(function () {
	$('.jsc-check-number').each(function () {
		new CheckNuber($(this));
	});
});