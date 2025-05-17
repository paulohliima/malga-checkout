import { useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { MdRefresh } from "react-icons/md";
import { useLoading } from "@/providers/loadingProvider";

const maxPull = 60;

const PullContainer = styled.div`
  touch-action: pan-y;
`;

const RefreshIconWrapper = styled.div<{ $pullDistance: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px; /* altura fixa */
  opacity: ${({ $pullDistance }) => Math.min($pullDistance / maxPull, 1)};
  transition: opacity 0.2s ease-in;
  position: relative;
  top: -40px; /* ícone sobe para cima */
  pointer-events: none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RefreshIcon = styled(MdRefresh)<{ refreshing: boolean }>`
  font-size: 32px;
  color: var(--color-brand-3);
  ${({ refreshing }) =>
    refreshing &&
    css`
      animation: ${rotate} 0.8s linear infinite;
    `}
`;

interface PullToRefreshProps {
  onRefresh: () => void;
  children: React.ReactNode;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({
  onRefresh,
  children,
}) => {
  const { setLoading } = useLoading();
  const [pullDistance, setPullDistance] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const startY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (refreshing) return;
    startY.current = e.touches[0].clientY;
    setShowIcon(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (refreshing) return;
    if (startY.current === null) return;

    const currentY = e.touches[0].clientY;
    const diff = currentY - startY.current;

    if (diff > 0) {
      setPullDistance(diff > maxPull ? maxPull : diff);
    }
  };

  const handleTouchEnd = () => {
    if (refreshing) return;

    if (pullDistance > maxPull * 0.3) {
      setRefreshing(true);
      setLoading(true);
      onRefresh();

      setTimeout(() => {
        setShowIcon(false);
        setRefreshing(false);
        setLoading(false);
        setPullDistance(0);
      }, 1000);
    } else {
      setPullDistance(0);
    }
    startY.current = null;
  };

  return (
    <PullContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `translateY(${pullDistance}px)`,
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <RefreshIconWrapper $pullDistance={pullDistance}>
        {showIcon && <RefreshIcon refreshing={refreshing} />}
      </RefreshIconWrapper>
      {children}
    </PullContainer>
  );
};

export default PullToRefresh;
