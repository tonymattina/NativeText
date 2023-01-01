const utteranceContainer = document.querySelector('.utterance-container')
const analysisContainer = document.querySelector('.analysis-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const utterances = ['utt01', 'utt02', 'utt03', 'utt04', 'utt05', 'utt06', 'utt07', 'utt08', 'utt09', 'utt10', 'utt11', 'utt12', 'utt13', 'utt14', 'utt15', 'utt16']

const subtitle = ['', 'way̓ ixíʔ axáʔ iʔ, caʔkʷ cus [t]a nqílxʷcən', 't̓aʕpám t sƛ̓aʔcínəm', 'uɬ ixíʔ c̓iqʷs. ixíʔ uɬ nək̓níˑˑk̓s', 'way̓ k̓əɬník̓əs {iʔ} iʔ sciʔíkst', 'uɬ iʔ sc̓uʔxán', 'uɬ axáʔ{iʔ} iʔ ck̓iɬp k̓la stxmníw̓s', 'ixíʔ uɬ kmix k̓əm axáʔ iʔ ʔásx̌əm {ixíʔ a} uɬ axáʔ iʔ k̓əspán,', 'uɬ ixíʔ uɬ kʷ ɬaʔ ksl̕əx̌l̕áx̌t ixíʔ uɬ pəx̌ʷmɬtíxʷəlx', 'kəm̓ t̓iʔ knaqs asl̕áx̌t   uɬ ixíʔ xʷíc̓əɬtxʷ {iʔ} iʔ ʔásx̌əm', 'uɬ axáʔ iʔ sc̓uʔxán uɬ nsək̓ʷtínk ck̓iɬp', 'uɬ axáʔ sc̓ʔikst', 'ixíʔ uɬ ixíʔ sənq̓ʷɬtáqs asl̕áx̌t.', '{i uɬ náx̌əm} uɬ ʔasíl aksct̓áʕp', 'uɬ t̓k̓ʷɬtíxʷ naqs sƛ̓aʔcínəm asl̕áx̌t,', 'uɬ t̓iʔ naqs kʷintxʷ, ixíʔ uɬ {ps} p ɬxʷuy.']
const analysis = ['', 'way̓ ixíʔ axáʔ iʔ, caʔkʷ cu-s t n+qilxʷcn', 't̓aʕpá+m t s+ƛ̓aʔcín+m', 'uɬ ixíʔ c̓iqʷ-s. ixíʔ uɬ nk̓•nik̓-s', 'way̓ k̓ɬ+nik̓-s iʔ s+cʔikst', 'uɬ iʔ s+c̓w̓xan', 'uɬ axáʔ iʔ ck̓iɬp k̓l s+t+xmniw̓s,', 'ixíʔ uɬ kmix k̓m axáʔ iʔ ʔasx̌m uɬ axáʔ iʔ k̓span', 'uɬ ixíʔ uɬ kʷ ɬaʔ k+s+l̕x̌•l̕ax̌+t ixíʔ uɬ px̌ʷm -ɬt -ixʷ -lx', 'km̓ t̓iʔ knaqs a -s+l̕ax̌+t   uɬ ixíʔ xʷic̓ -ɬt -xʷ iʔ ʔasx̌m', 'uɬ axáʔ iʔ s+c̓w̓xan uɬ n+s+k̓ʷtink ck̓iɬp', 'uɬ axáʔ s+cʔikst', 'ixíʔ uɬ ixíʔ s+n+q̓ʷɬ+taqs a -s+l̕ax̌+t.', 'uɬ ʔasíl a-ksc-t̓aʕp', 'uɬ t̓k̓ʷ -ɬt -ixʷ naqs s+ƛ̓aʔcín+m a -s+l̕ax̌+t', 'uɬ t̓iʔ naqs kʷin -t -xʷ ixíʔ uɬ p ɬ+xʷuy.']
const translation = ['', 'Well, this, as they say in Indian,', 'shooting deer,', 'They / he skin(s) it, then they / he cut(s) it.', 'They cut off the front foot,', 'and the feet', 'and the ribs on both sides,', 'and only the backbone, and the nape of the neck.', 'when you have friends you pass it around to them', 'or if you have only one partner, you give him the backbone', 'and one foot, and half the ribs', 'and the hind quarter,', 'and that’s your partner’s share', 'And if you shoot two,', 'you put down one deer for your partner,', 'and you take one, and then you both go back.']

 
/*let subtitleIndex = 0;*/
let utteranceIndex = 0;

function loadUtterance(utterance) {
   audio.src = `audio/${utterance}.mp3`;
   var x = utteranceIndex;
   document.getElementById("subtitle").innerText = subtitle[x];
   document.getElementById("analysis").innerText = analysis[x];
}
function playUtterance() {
	utteranceContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');
	document.getElementById("translation").innerText = "";
	audio.play()
}
function pauseUtterance() {
	utteranceContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	audio.pause();
}

function prevUtterance() {
	utteranceIndex--;
	if(utteranceIndex < 0) {
		utteranceIndex = utterances.length - 1;
	}
	loadUtterance(utterances[utteranceIndex]);
	playUtterance();
}
function nextUtterance() {
	utteranceIndex++;
	if (utteranceIndex > utterances.length - 1) {
		utteranceIndex = 0;
	alert("The story is over. Refresh the page if you want to hear it again.")
	}
	loadUtterance(utterances[utteranceIndex]);
	playUtterance();
}
playBtn.addEventListener('click', () => {
	const isPlaying = utteranceContainer.classList.contains('play');
	
	if(isPlaying) {
		pauseUtterance();
	} else {
		playUtterance();
	}
})

function displayTranslation() {
	var x = utteranceIndex;
	document.getElementById("translation").innerText = translation[x];
}
audio.addEventListener('ended', nextUtterance);
prevBtn.addEventListener('click', prevUtterance);
nextBtn.addEventListener('click', nextUtterance);