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
    const createFlowers = () => {
      const newFlowers = [];
      for (let i = 0; i < 20; i++) {
        newFlowers.push({
          id: i,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 20 + 10}px`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animationDelay: `${Math.random() * 5}s`
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
    "Happy Birthday, My Tien! 🎂🎉",
    "I wonder if you're surprised to see this website, but anyway, this is a small gift I made for you.",
    "I used to think that if I tried hard enough, I would get a response. But I understand that some things aren't meant to be, no matter how much we want them. I'm tired, if it's not working out, then let it be >_<.",
    "But I'm happy though, feeling like something has changed in my ordinary life. Thank you for giving me feelings that I had long forgotten. Even if it was just through screens, I was really happy talking to you.",
    "Whatever happens, I still hope you're always happy and achieve everything you wish for. And you made me believe in the saying 'Crushing uncertainly is real ^^'. Thank you, for everything.",
    "Happy Birthday, My Tien! 🌸🎁",
    "---",
    "Chúc mừng sinh nhật, Mỹ Tiên! 🎂🎉",
    "Anh không biết em có bất ngờ khi thấy trang web này không, nhưng dù sao thì, đây là món quà nhỏ anh dành cho em.",
    "Anh từng nghĩ rằng chỉ cần cố gắng đủ nhiều thì được hồi đáp. Nhưng mà, anh hiểu ra có những chuyện không phải cứ muốn là được. Tui mệt rồi, tán mãi hông đổ thì thôi >_<.",
    "Nhưng anh lại thấy vui nha, cảm thấy có chút gì đó thay đổi trong cuộc sống bình thường của anh. Cảm ơn em vì đã cho anh những cảm xúc mà anh đã quên từ lâu. Dù chỉ qua màn hình, anh đã từng rất vui khi nói chuyện với em.",
    "Dù thế nào, anh vẫn mong em luôn vui vẻ, hạnh phúc và đạt được những gì em mong muốn. Và em làm anh tin vào câu 'Luỵ mập mờ là có thiệt ^^'. Cảm ơn em, vì tất cả.",
    "Chúc mừng sinh nhật, Mỹ Tiên! 🌸🎁"
  ];

  return (
    <div className="birthday-container">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="flower"
          style={{
            left: flower.left,
            width: flower.size,
            height: flower.size,
            animationDuration: flower.animationDuration,
            animationDelay: flower.animationDelay
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