import { Project } from "./types";

export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Federated Learning for Healthcare",
    description:
      "A privacy-preserving machine learning framework that enables hospitals to collaboratively train models without sharing sensitive patient data. Uses differential privacy and secure aggregation protocols.",
    status: "Active",
    tags: ["Federated Learning", "Healthcare", "Privacy", "Differential Privacy"],
    leads: ["Dr. Sarah Chen", "Prof. Michael Zhang"],
    links: {
      github: "https://github.com/tmi/federated-healthcare",
      paper: "https://arxiv.org/abs/2024.12345",
    },
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        alt: "Federated learning architecture diagram",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        alt: "Healthcare data visualization",
      },
      {
        type: "code",
        language: "python",
        code: `def federated_averaging(weights_list, num_samples):
    """Aggregate model weights from multiple clients."""
    total_samples = sum(num_samples)
    weighted_avg = {}
    
    for key in weights_list[0].keys():
        weighted_avg[key] = sum(
            w[key] * n for w, n in zip(weights_list, num_samples)
        ) / total_samples
    
    return weighted_avg`,
      },
    ],
  },
  {
    id: "2",
    title: "Explainable AI for Credit Scoring",
    description:
      "Developing interpretable machine learning models for financial institutions to understand and explain credit decisions. Combines SHAP values with rule-based explanations.",
    status: "Active",
    tags: ["Explainable AI", "Finance", "SHAP", "Interpretability"],
    leads: ["Dr. James Park", "Dr. Lisa Wang"],
    links: {
      github: "https://github.com/tmi/explainable-credit",
      demo: "https://demo.tmi.utoronto.ca/credit-scoring",
    },
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        alt: "SHAP feature importance visualization",
      },
      {
        type: "code",
        language: "python",
        code: `import shap

def explain_prediction(model, instance):
    """Generate SHAP explanations for a single prediction."""
    explainer = shap.TreeExplainer(model)
    shap_values = explainer.shap_values(instance)
    
    return {
        'prediction': model.predict(instance)[0],
        'shap_values': shap_values,
        'feature_importance': sorted(
            zip(feature_names, shap_values[0]),
            key=lambda x: abs(x[1]),
            reverse=True
        )
    }`,
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        alt: "Credit scoring dashboard",
      },
    ],
  },
  {
    id: "3",
    title: "Adversarial Robustness in Vision Models",
    description:
      "Investigating defense mechanisms against adversarial attacks on computer vision models. Focuses on certified defenses and robust training methods.",
    status: "Paused",
    tags: ["Adversarial ML", "Computer Vision", "Security", "Robustness"],
    leads: ["Prof. David Kim"],
    links: {
      github: "https://github.com/tmi/adversarial-vision",
      paper: "https://arxiv.org/abs/2024.23456",
    },
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        alt: "Adversarial example comparison",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
        alt: "Robustness evaluation metrics",
      },
      {
        type: "code",
        language: "python",
        code: `def pgd_attack(model, image, label, eps=0.03, alpha=0.01, steps=40):
    """Projected Gradient Descent attack."""
    perturbed = image.clone().detach().requires_grad_(True)
    
    for _ in range(steps):
        loss = F.cross_entropy(model(perturbed), label)
        loss.backward()
        
        with torch.no_grad():
            perturbed += alpha * perturbed.grad.sign()
            perturbed = torch.clamp(perturbed, image - eps, image + eps)
            perturbed.grad.zero_()
    
    return perturbed`,
      },
    ],
  },
  {
    id: "4",
    title: "Fairness in Algorithmic Hiring",
    description:
      "Analyzing and mitigating bias in automated hiring systems. Developing fairness metrics and debiasing techniques for resume screening algorithms.",
    status: "Active",
    tags: ["Fairness", "Bias", "HR Tech", "Ethics"],
    leads: ["Dr. Maria Rodriguez", "Dr. Alex Thompson"],
    links: {
      github: "https://github.com/tmi/fair-hiring",
    },
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
        alt: "Fairness metrics visualization",
      },
      {
        type: "code",
        language: "python",
        code: `def demographic_parity_difference(predictions, protected_attribute):
    """Calculate demographic parity difference."""
    groups = {}
    for pred, attr in zip(predictions, protected_attribute):
        if attr not in groups:
            groups[attr] = []
        groups[attr].append(pred)
    
    positive_rates = {
        attr: sum(group) / len(group)
        for attr, group in groups.items()
    }
    
    return max(positive_rates.values()) - min(positive_rates.values())`,
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        alt: "Bias mitigation results",
      },
    ],
  },
  {
    id: "5",
    title: "Neural Architecture Search for Edge Devices",
    description:
      "Automated discovery of efficient neural network architectures optimized for mobile and IoT devices. Balances accuracy with computational constraints.",
    status: "Completed",
    tags: ["NAS", "Edge Computing", "Mobile", "Optimization"],
    leads: ["Prof. Kevin Lee"],
    links: {
      github: "https://github.com/tmi/nas-edge",
      paper: "https://arxiv.org/abs/2024.34567",
      demo: "https://demo.tmi.utoronto.ca/nas-edge",
    },
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        alt: "Neural architecture search space",
      },
      {
        type: "code",
        language: "python",
        code: `class EdgeNAS:
    def __init__(self, target_latency=50, target_memory=10):
        self.target_latency = target_latency  # ms
        self.target_memory = target_memory  # MB
    
    def evaluate_architecture(self, arch):
        """Evaluate architecture on latency and memory."""
        model = arch.to_model()
        latency = measure_latency(model)
        memory = measure_memory(model)
        
        if latency > self.target_latency or memory > self.target_memory:
            return None  # Invalid architecture
        
        accuracy = train_and_evaluate(model)
        return {
            'accuracy': accuracy,
            'latency': latency,
            'memory': memory,
            'score': accuracy / (latency * memory)
        }`,
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        alt: "Edge device deployment",
      },
    ],
  },
  {
    id: "6",
    title: "Causal Inference in Social Media",
    description:
      "Applying causal inference methods to understand the effects of algorithmic recommendations on user behavior and information consumption patterns.",
    status: "Active",
    tags: ["Causal Inference", "Social Media", "Recommendation Systems"],
    leads: ["Dr. Emily Chen", "Prof. Robert Singh"],
    links: {
      paper: "https://arxiv.org/abs/2024.45678",
    },
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        alt: "Causal graph for recommendation effects",
      },
      {
        type: "code",
        language: "python",
        code: `def propensity_score_matching(treated, control, covariates):
    """Match treated and control units using propensity scores."""
    # Estimate propensity scores
    X = np.vstack([treated[covariates], control[covariates]])
    y = np.hstack([np.ones(len(treated)), np.zeros(len(control))])
    
    ps_model = LogisticRegression().fit(X, y)
    treated_ps = ps_model.predict_proba(treated[covariates])[:, 1]
    control_ps = ps_model.predict_proba(control[covariates])[:, 1]
    
    # Match using nearest neighbor
    matches = []
    for i, ps in enumerate(treated_ps):
        distances = np.abs(control_ps - ps)
        match_idx = np.argmin(distances)
        matches.append((i, match_idx))
    
    return matches`,
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
        alt: "Treatment effect estimation results",
      },
    ],
  },
];

