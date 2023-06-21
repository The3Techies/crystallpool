const partnersLogo = [
  '/ImgsHome/partnerLogo1.webp',
  '/ImgsHome/partnerLogo2.webp',
  '/ImgsHome/partnerLogo3.webp',
  '/ImgsHome/partnerLogo4.webp',
  '/ImgsHome/partnerLogo5.webp',
];

const duplicatedPartnersLogo = [...partnersLogo, ...partnersLogo];

const slideAnimation = `
  @keyframes slideAnimation {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-${(100 / duplicatedPartnersLogo.length) * duplicatedPartnersLogo.length}%);
    }
  }
`;

export default function Partners() {
  const animationDuration = duplicatedPartnersLogo.length * 2; // Calculate the total animation duration

  return (
    <div className="bg-[#FFFFFF] mt-4 lg:mb-16 mb-4">
      <h1 className="text-center text-[#26547C] font-bold text-3xl mb-4">شركاؤنا</h1>

      <div className="w-full overflow-hidden">
        <style>{slideAnimation}</style>
        <div className="flex justify-end gap-2 flex-shrink-0" style={{ animation: `slideAnimation ${animationDuration}s linear infinite` }}>
          {duplicatedPartnersLogo.map((image, index) => (
            <div className="" key={index} style={{ animationDelay: `${index * 2}s`, flexShrink: 0 }}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="lg:h-52 lg:w-52 h-44 w-44 rounded-xl border-2 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
