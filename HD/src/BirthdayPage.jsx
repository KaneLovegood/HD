import confetti from 'canvas-confetti';
import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

function BirthdayPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [page, setPage] = useState(0);
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // Hiệu ứng confetti khi trang web được tải
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      }));
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      }));
    }, 250);

    // Tạo hiệu ứng hoa rơi
    const flowerSvgs = [
      // Hoa hồng hồng
      `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffb6c1"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="6" ry="10" fill="%23ff69b4"/><ellipse cx="12" cy="12" rx="10" ry="6" fill="%23fff0f5"/></svg>')`,
      // Hoa vàng
      `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23fff176"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="6" ry="10" fill="%23ffd600"/><ellipse cx="12" cy="12" rx="10" ry="6" fill="%23fffde7"/></svg>')`,
      // Hoa tím
      `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ce93d8"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="6" ry="10" fill="%238e24aa"/><ellipse cx="12" cy="12" rx="10" ry="6" fill="%23f3e5f5"/></svg>')`,
      // Hoa trắng
      `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="6" ry="10" fill="%23e1bee7"/><ellipse cx="12" cy="12" rx="10" ry="6" fill="%23fff"/></svg>')`,
    ];
    const createFlowers = () => {
      const newFlowers = [];
      for (let i = 0; i < 24; i++) {
        const svg = flowerSvgs[Math.floor(Math.random() * flowerSvgs.length)];
        const sway = Math.random() > 0.5 ? 'left' : 'right';
        const rotate = Math.random() * 360;
        const opacity = 0.6 + Math.random() * 0.4;
        newFlowers.push({
          id: i,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 24 + 16}px`,
          animationDuration: `${Math.random() * 8 + 8}s`,
          animationDelay: `${Math.random() * 6}s`,
          svg,
          sway,
          rotate,
          opacity
        });
      }
      setFlowers(newFlowers);
    };

    createFlowers();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const playMusic = () => {
    setIsPlaying(!isPlaying);
    // Thêm logic phát nhạc ở đây
  };

  const nextPage = () => {
    setPage((prevPage) => (prevPage + 1) % messages.length);
  };

  const messages = [
    "Happy Birthday, Little Light! 🎂🎉",
    "I wonder if you're surprised to see this website, but anyway, this is a small gift I made for you.",
    "I've come to realize that not everything needs a clear outcome—some connections simply add value in the moment, and that's enough.",
    "Still, I feel grateful. Something about this experience added a bit of color to my everyday routine. Thank you for the good conversations and for reminding me what it's like to genuinely connect—even if it was just through a screen.",
    "No matter where life takes you, I quietly wish you all the happiness and success you're hoping for. Thank you for being a small, meaningful part of my story. And if one day you ever need a familiar voice, you know where to find me.",
    "Happy Birthday, My Tien! 🌸🎁",
    "---",
    "Chúc mừng sinh nhật, Mỹ Tiên! 🎂🎉",
    "Không biết em có bất ngờ khi thấy trang web này không, nhưng dù sao thì, đây là một món quà nhỏ anh làm riêng cho em.",
    "Anh nhận ra rằng không phải điều gì cũng cần một cái kết rõ ràng — có những kết nối chỉ đơn giản là góp thêm ý nghĩa cho hiện tại, và như vậy là đủ rồi.",
    "Dù vậy, anh thật sự biết ơn. Trải nghiệm này khiến cuộc sống thường ngày của anh trở nên có màu sắc hơn một chút. Cảm ơn em vì những cuộc trò chuyện thú vị và vì đã nhắc anh nhớ cảm giác kết nối thật lòng – dù chỉ qua một màn hình.",
    "Dù cuộc sống có đưa em đi đâu, anh vẫn âm thầm chúc em luôn hạnh phúc và đạt được những điều em mong muốn. Cảm ơn em vì đã từng là một phần nhỏ nhưng ý nghĩa trong câu chuyện của anh. Và nếu một ngày nào đó em cần một giọng nói quen thuộc, thì em biết anh ở đâu rồi đấy.",
    "Chúc mừng sinh nhật, Mỹ Tiên! 🌸🎁"
  ];
  

  return (
    <div className="birthday-container">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className={`flower flower-${flower.sway}`}
          style={{
            left: flower.left,
            width: flower.size,
            height: flower.size,
            animationDuration: flower.animationDuration,
            animationDelay: flower.animationDelay,
            backgroundImage: flower.svg,
            transform: `rotate(${flower.rotate}deg)` ,
            opacity: flower.opacity
          }}
        />
      ))}
      <div className="content">
        <TransitionGroup>
          <CSSTransition
            key={page}
            timeout={500}
            classNames="fade"
          >
            <h1 className={messages[page] === "---" ? "divider" : "title"}>{messages[page]}</h1>
          </CSSTransition>
        </TransitionGroup>
        <div className="button-container">
          <button className="next-button" onClick={nextPage}>
            {page < 6 ? "Next" : "Tiếp tục"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BirthdayPage; 