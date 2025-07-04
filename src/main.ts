import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="casino-app">
      <!-- Header -->
      <header class="header">
        <nav class="nav">
          <div class="nav-brand">
            <h2>🎰 LuxuryCasino</h2>
          </div>
          <ul class="nav-menu">
            <li><a href="#games">Games</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#promotions">Promotions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div class="nav-actions">
            <button class="btn-secondary">Login</button>
            <button class="btn-primary">Sign Up</button>
          </div>
        </nav>
      </header>

      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            Experience the Ultimate<br>
            <span class="text-gold">Casino Adventure</span>
          </h1>
          <p class="hero-subtitle">
            Join thousands of players and win big with our premium casino games,
            generous bonuses, and unmatched entertainment experience.
          </p>
          <div class="hero-actions">
            <button class="btn-primary btn-large">Play Now</button>
            <button class="btn-secondary btn-large">Learn More</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="casino-cards">
            <div class="card" *ngFor="let card of cards; let i = index" 
                 [style.animation-delay]="i * 0.2 + 's'">
              {{card}}
            </div>
          </div>
        </div>
      </section>

      <!-- Games Section -->
      <section id="games" class="games">
        <div class="section-header">
          <h2>Popular Games</h2>
          <p>Choose from hundreds of exciting casino games</p>
        </div>
        <div class="games-grid">
          <div class="game-card" *ngFor="let game of games" (click)="selectGame(game)">
            <div class="game-image">
              <span class="game-icon">{{game.icon}}</span>
            </div>
            <div class="game-info">
              <h3>{{game.name}}</h3>
              <p>{{game.description}}</p>
              <div class="game-stats">
                <span class="stat">
                  <span class="stat-label">RTP:</span>
                  <span class="stat-value">{{game.rtp}}%</span>
                </span>
                <span class="stat">
                  <span class="stat-label">Players:</span>
                  <span class="stat-value">{{game.players}}</span>
                </span>
              </div>
            </div>
            <button class="btn-primary">Play Now</button>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="features">
        <div class="section-header">
          <h2>Why Choose LuxuryCasino?</h2>
          <p>Experience the best in online gaming</p>
        </div>
        <div class="features-grid">
          <div class="feature-card" *ngFor="let feature of features">
            <div class="feature-icon">{{feature.icon}}</div>
            <h3>{{feature.title}}</h3>
            <p>{{feature.description}}</p>
          </div>
        </div>
      </section>

      <!-- Promotions Section -->
      <section id="promotions" class="promotions">
        <div class="section-header">
          <h2>Exclusive Promotions</h2>
          <p>Boost your winnings with our amazing offers</p>
        </div>
        <div class="promotions-grid">
          <div class="promotion-card" *ngFor="let promo of promotions">
            <div class="promotion-badge">{{promo.badge}}</div>
            <h3>{{promo.title}}</h3>
            <div class="promotion-amount">{{promo.amount}}</div>
            <p>{{promo.description}}</p>
            <button class="btn-primary">Claim Now</button>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>🎰 LuxuryCasino</h3>
            <p>Your premier destination for online casino gaming. Play responsibly and enjoy the thrill of winning.</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#games">Games</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#promotions">Promotions</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#responsible">Responsible Gaming</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <div class="social-links">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">🐦</a>
              <a href="#">💬</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 LuxuryCasino. All rights reserved. | 18+ Only | Play Responsibly</p>
        </div>
      </footer>
    </div>
  `
})
export class App {
  cards = ['🂡', '🂮', '🂭', '🂫'];
  
  games = [
    {
      name: 'Blackjack Pro',
      description: 'Classic card game with professional dealers',
      icon: '🂡',
      rtp: 99.5,
      players: '2.1K'
    },
    {
      name: 'Roulette Royale',
      description: 'European roulette with live dealers',
      icon: '🎰',
      rtp: 97.3,
      players: '1.8K'
    },
    {
      name: 'Mega Slots',
      description: 'Progressive jackpot slot machines',
      icon: '🎲',
      rtp: 96.8,
      players: '3.2K'
    },
    {
      name: 'Poker Championship',
      description: 'Texas Hold\'em tournaments',
      icon: '🃏',
      rtp: 98.1,
      players: '1.5K'
    },
    {
      name: 'Baccarat Elite',
      description: 'High-stakes baccarat tables',
      icon: '💎',
      rtp: 98.9,
      players: '890'
    },
    {
      name: 'Dice Masters',
      description: 'Exciting dice games and tournaments',
      icon: '🎯',
      rtp: 97.5,
      players: '1.2K'
    }
  ];

  features = [
    {
      icon: '🔒',
      title: 'Secure & Licensed',
      description: 'Fully licensed and regulated with bank-level security to protect your funds and personal information.'
    },
    {
      icon: '⚡',
      title: 'Instant Deposits',
      description: 'Fast and secure deposits with multiple payment methods including crypto, cards, and e-wallets.'
    },
    {
      icon: '🎁',
      title: 'Generous Bonuses',
      description: 'Welcome bonuses, daily rewards, and VIP program with exclusive perks and cashback offers.'
    },
    {
      icon: '🎮',
      title: '500+ Games',
      description: 'Extensive collection of slots, table games, live dealer games, and exclusive titles.'
    },
    {
      icon: '📱',
      title: 'Mobile Optimized',
      description: 'Play anywhere, anytime with our fully optimized mobile platform and native apps.'
    },
    {
      icon: '🏆',
      title: 'VIP Program',
      description: 'Exclusive VIP benefits including personal account managers, higher limits, and special events.'
    }
  ];

  promotions = [
    {
      badge: 'New Player',
      title: 'Welcome Bonus',
      amount: '$1,000',
      description: 'Get up to $1,000 bonus on your first deposit plus 100 free spins on selected slots.'
    },
    {
      badge: 'Weekly',
      title: 'Reload Bonus',
      amount: '50%',
      description: 'Every Friday get a 50% reload bonus up to $500 on your deposits.'
    },
    {
      badge: 'VIP',
      title: 'Cashback',
      amount: '10%',
      description: 'VIP members get up to 10% cashback on losses every week, no questions asked.'
    }
  ];

  selectGame(game: any) {
    console.log('Selected game:', game.name);
    // Add game selection logic here
  }
}

bootstrapApplication(App);