import { Routes } from '@angular/router'
import { ExperienceComponent } from './experience/experience.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { SkillComponent } from './home/skill/skill.component'
import { PresentationComponent } from './presentation/presentation.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { AchievementComponent } from './achievement/achievement.component'
import { MinigamesComponent } from './minigames/minigames.component'
import { SkillsComponent } from './skills/skills.component'
import { BlogComponent } from './blog/blog.component'
import { DataComponent } from './data/data.component'
import { SectionComponent } from './section/section.component'
import { Game1Component } from './minigames/game1/game1.component'

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: ':id', component: SkillComponent, outlet: 'skill' }],
  },
  {
    path: 'section',
    component: SectionComponent,
    children: [
      { path: 'presentation', component: PresentationComponent },
      { path: 'experiences', component: ExperienceComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'achievements', component: AchievementComponent },
      { path: 'data', component: DataComponent },
      {
        path: 'mini-games',
        component: MinigamesComponent,
        children: [{ path: 'game1', component: Game1Component }],
      },
      { path: 'blog', component: BlogComponent },
    ],
  },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
]
