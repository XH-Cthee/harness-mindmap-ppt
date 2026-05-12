export const sourceMarkdown = `
- Harness 工作流程
  软件交付平台全链路讲解
  @image overview.svg
    - 平台定位
      工程化的软件交付操作系统
    - 核心工作流
      Pipeline 驱动的交付主线
      @image pipeline-flow.svg
        - 构建阶段
          编译测试镜像打包安全扫描
        - 部署阶段
          多环境渐进式发布
        - 验证阶段
          自动化测试监控审批
        - 回滚机制
          基于指标自动回滚
    - 关键组件
      七大模块协同工作
        - Pipeline 编排
          可视化流水线 YAML 即代码
        - Connector
          连接 Git Registry K8s
        - Template
          可复用的标准化模板
        - Service 与 Environment
          制品定义与部署目标
    - 当下实践
      四个维度的最佳实践
      @image practices.svg
        - CI 加速
          缓存并行测试安全左移
        - CD 策略
          金丝雀蓝绿功能开关
        - GitOps
          配置入仓自动同步
        - 治理合规
          模板审批审计权限
    - 未来演进
      五大发展方向
      @image future.svg
        - AI 驱动
          智能排障与发布决策
        - 平台工程
          自助式内部开发者平台
        - 成本治理
          部署前自动成本评估
        - 混沌工程
          发布前自动故障注入
        - 供应链安全
          SBOM 全链路签名验证
    - 落地路径
      三步走推广策略
        - 第一步
          小范围验证最小闭环
        - 第二步
          提炼模板团队推广
        - 第三步
          深度集成完整平台
`;
